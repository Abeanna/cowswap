import { Currency, CurrencyAmount, Percent } from '@uniswap/sdk-core'
import { Field } from 'state/swap/actions'
import { PriceImpact } from 'hooks/usePriceImpact'
import { ReceiveAmountInfo } from 'pages/NewSwap/helpers/tradeReceiveAmount'
import { SwapActions } from 'state/swap/hooks'
import { BalanceAndSubsidy } from 'hooks/useCowBalanceAndSubsidy'
import TradeGp from 'state/swap/TradeGp'

export interface SwapFormProps {
  recipient: string | null
  trade: TradeGp | null
  inputCurrencyInfo: CurrencyInfo
  outputCurrencyInfo: CurrencyInfo
  allowedSlippage: Percent
  isGettingNewQuote: boolean
  allowsOffchainSigning: boolean
  showRecipientControls: boolean
  subsidyAndBalance: BalanceAndSubsidy
  priceImpactParams: PriceImpact
  swapActions: SwapActions
}

export interface TradeStateFromUrl {
  inputCurrency: string | null
  outputCurrency: string | null
  amount: string | null
  independentField: string | null
  recipient: string | null
}

export interface CurrencyInfo {
  field: Field
  viewAmount: string
  receiveAmountInfo: ReceiveAmountInfo | null
  currency: Currency | null
  balance: CurrencyAmount<Currency> | null
  fiatAmount: CurrencyAmount<Currency> | null
}

export interface CurrenciesBalances {
  INPUT: CurrencyAmount<Currency> | null
  OUTPUT: CurrencyAmount<Currency> | null
}
