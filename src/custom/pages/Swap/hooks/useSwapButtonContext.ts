import { useWeb3React } from '@web3-react/core'
import { useWalletInfo } from 'hooks/useWalletInfo'
import { useDerivedSwapInfo, useDetectNativeToken, useSwapState } from 'state/swap/hooks'
import useTransactionDeadline from 'hooks/useTransactionDeadline'
import { useExpertModeManager } from 'state/user/hooks'
import { useCloseModals, useToggleWalletModal } from 'state/application/hooks'
import { useSwapConfirmManager } from 'pages/Swap/hooks/useSwapConfirmManager'
import { Field } from 'state/swap/actions'
import { TradeType } from '@uniswap/sdk-core'
import { computeSlippageAdjustedAmounts } from 'utils/prices'
import { useWrapType, useWrapUnwrapError } from 'hooks/useWrapCallback'
import { useCallback } from 'react'
import { logSwapFlow } from 'pages/Swap/swapFlow/logger'
import { swapFlow } from 'pages/Swap/swapFlow'
import { useApproveCallbackFromTrade } from 'hooks/useApproveCallback'
import { useGnosisSafeInfo } from 'hooks/useGnosisSafeInfo'
import { useIsSwapUnsupported } from 'hooks/useIsSwapUnsupported'
import { ApproveButtonProps } from 'pages/Swap/components/ApproveButton'
import { getSwapButtonState } from 'pages/Swap/helpers/getSwapButtonState'
import { SwapButtonContext } from 'pages/Swap/components/SwapButton/SwapButton'
import { useGetQuoteAndStatus } from 'state/price/hooks'
import { OperationType } from 'components/TransactionConfirmationModal'
import { useTransactionConfirmModal } from 'pages/Swap/hooks/useTransactionConfirmModal'
import { useSwapFlowContext } from 'pages/Swap/swapFlow/useSwapFlowContext'

export interface SwapButtonInput {
  feeWarningAccepted: boolean
  impactWarningAccepted: boolean
  approvalSubmitted: boolean
  setApprovalSubmitted(value: boolean): void
  openNativeWrapModal(): void
}

export function useSwapButtonContext(input: SwapButtonInput): SwapButtonContext {
  const { feeWarningAccepted, impactWarningAccepted, approvalSubmitted, setApprovalSubmitted, openNativeWrapModal } =
    input

  const { account, chainId } = useWeb3React()
  const { isSupportedWallet } = useWalletInfo()
  const { v2Trade: trade, allowedSlippage, parsedAmount, currencies, inputError: swapInputError } = useDerivedSwapInfo()
  const transactionDeadline = useTransactionDeadline()
  const [isExpertMode] = useExpertModeManager()
  const closeModals = useCloseModals()
  const toggleWalletModal = useToggleWalletModal()
  const { openSwapConfirmModal } = useSwapConfirmManager()
  const { INPUT } = useSwapState()
  const setTransactionConfirm = useTransactionConfirmModal()
  const swapFlowContext = useSwapFlowContext()

  const currencyIn = currencies[Field.INPUT]
  const currencyOut = currencies[Field.OUTPUT]

  const { quote, isGettingNewQuote } = useGetQuoteAndStatus({
    token: currencies.INPUT?.isNative ? currencies.INPUT.wrapped.address : INPUT.currencyId,
    chainId,
  })

  const { isNativeIn, isWrappedOut, wrappedToken } = useDetectNativeToken(currencies, chainId)
  const isNativeInSwap = isNativeIn && !isWrappedOut

  const nativeInput = !!(trade?.tradeType === TradeType.EXACT_INPUT)
    ? trade?.inputAmount
    : // else use the slippage + fee adjusted amount
      computeSlippageAdjustedAmounts(trade, allowedSlippage).INPUT
  const wrapUnrapAmount = isNativeInSwap ? (nativeInput || parsedAmount)?.wrapped : nativeInput || parsedAmount
  const wrapType = useWrapType()
  const wrapInputError = useWrapUnwrapError(wrapType, wrapUnrapAmount)

  const handleSwap = useCallback(() => {
    if (!swapFlowContext) return

    logSwapFlow('Start swap flow')
    swapFlow(swapFlowContext)
  }, [swapFlowContext])

  const swapCallbackError = swapFlowContext ? null : 'Missing dependencies'
  const isValid = !swapInputError && feeWarningAccepted && impactWarningAccepted // mod

  const { approvalState, approve: approveCallback } = useApproveCallbackFromTrade({
    openTransactionConfirmationModal(pendingText: string) {
      setTransactionConfirm({ operationType: OperationType.APPROVE_TOKEN, pendingText })
    },
    closeModals,
    trade,
    allowedSlippage,
    isNativeFlow: isNativeInSwap,
  })

  const isReadonlyGnosisSafeUser = useGnosisSafeInfo()?.isReadOnly || false
  const isSwapSupported = useIsSwapUnsupported(currencyIn, currencyOut)

  const approveButtonProps: ApproveButtonProps = {
    trade,
    currencyIn,
    allowedSlippage,
    transactionDeadline,
    isExpertMode,
    handleSwap,
    isValid,
    approvalState,
    approveCallback,
    approvalSubmitted,
    setApprovalSubmitted,
  }

  const swapButtonState = getSwapButtonState({
    account,
    isSupportedWallet,
    isReadonlyGnosisSafeUser,
    isExpertMode,
    isSwapSupported,
    isNativeIn: isNativeInSwap,
    wrappedToken,
    wrapType,
    wrapInputError,
    quoteError: quote?.error,
    inputError: swapInputError,
    approvalState,
    approvalSubmitted,
    feeWarningAccepted,
    impactWarningAccepted,
    isGettingNewQuote,
    swapCallbackError,
    trade,
  })

  return {
    swapButtonState,
    approveButtonProps,
    chainId,
    wrappedToken,
    handleSwap,
    wrapInputError,
    wrapUnrapAmount,
    onWrap() {
      openNativeWrapModal()
    },
    openSwapConfirm() {
      trade && openSwapConfirmModal(trade)
    },
    toggleWalletModal,
    swapInputError,
  }
}
