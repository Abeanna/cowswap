import { useContext } from 'react'
import { Percent } from '@uniswap/sdk-core'
import { ThemeContext } from 'styled-components/macro'
import { Trans } from '@lingui/macro'
import { ThemedText } from 'theme'

import { RowBetween, RowFixed } from 'components/Row'
import { MouseoverTooltipContent } from 'components/Tooltip'
import { INPUT_OUTPUT_EXPLANATION, PERCENTAGE_PRECISION } from 'constants/index'
import { StyledInfo } from 'pages/Swap/styleds'
import { ClickableText } from 'pages/Pool/styleds'
import { useToggleSettingsMenu } from 'state/application/hooks'
import { formatSmart } from 'utils/format'
import { useShowNativeEthFlowSlippageWarning } from 'state/ethFlow/hooks'
import TradeGp from 'state/swap/TradeGp'
import { ETH_FLOW_SLIPPAGE } from 'state/ethFlow/updater'

export interface RowSlippageProps {
  trade?: TradeGp
  allowedSlippage: Percent
  fontWeight?: number
  fontSize?: number
  rowHeight?: number
  showSettingOnClick?: boolean
  nativeFlowSymbol?: false | string
}

export function RowSlippage({
  trade,
  allowedSlippage,
  fontSize = 14,
  fontWeight = 500,
  rowHeight,
  showSettingOnClick = true,
}: RowSlippageProps) {
  const theme = useContext(ThemeContext)
  const toggleSettings = useToggleSettingsMenu()
  const displaySlippage = `${formatSmart(allowedSlippage, PERCENTAGE_PRECISION)}%`

  // should we show the warning?
  const showEthFlowSlippageWarning = useShowNativeEthFlowSlippageWarning()
  const [nativeSymbol, wrappedSymbol] = [trade?.inputAmount.currency.symbol, trade?.inputAmount.currency.wrapped.symbol]

  return (
    <RowBetween height={rowHeight}>
      <RowFixed>
        <ThemedText.Black fontSize={fontSize} fontWeight={fontWeight} color={theme.text2}>
          {showEthFlowSlippageWarning ? (
            <Trans>
              Slippage tolerance{' '}
              <ThemedText.Warn display="inline-block" override>
                (modified)
              </ThemedText.Warn>
            </Trans>
          ) : showSettingOnClick ? (
            <ClickableText fontWeight={500} fontSize={14} color={theme.text2} onClick={toggleSettings}>
              <Trans>Slippage tolerance</Trans>
            </ClickableText>
          ) : (
            <Trans>Slippage tolerance</Trans>
          )}
        </ThemedText.Black>
        <MouseoverTooltipContent
          bgColor={theme.bg3}
          color={theme.text1}
          wrap
          content={
            showEthFlowSlippageWarning ? (
              <Trans>
                <p>
                  You are currently swapping {nativeSymbol || 'a native token'} with the classic{' '}
                  {wrappedSymbol || 'wrapped currency'} experience disabled.
                  <p>
                    Slippage tolerance is defaulted to {formatSmart(ETH_FLOW_SLIPPAGE, PERCENTAGE_PRECISION)}% to ensure
                    a high likelihood of order matching, even in volatile market situations.
                  </p>
                </p>
              </Trans>
            ) : (
              <Trans>
                <p>Your slippage is MEV protected: all orders are submitted with tight spread (0.1%) on-chain.</p>
                <p>
                  The slippage you pick here enables a resubmission of your order in case of unfavourable price
                  movements.
                </p>
                <p>{INPUT_OUTPUT_EXPLANATION}</p>
              </Trans>
            )
          }
        >
          <StyledInfo />
        </MouseoverTooltipContent>
      </RowFixed>
      <ThemedText.Black textAlign="right" fontSize={fontSize} color={theme.text1}>
        {showSettingOnClick ? (
          <ClickableText onClick={toggleSettings}>{displaySlippage}</ClickableText>
        ) : (
          <span>{displaySlippage}</span>
        )}
      </ThemedText.Black>
    </RowBetween>
  )
}
