import styled from 'styled-components/macro'
import { ReactComponent as DropDown } from 'assets/images/dropdown.svg'
import { lighten } from 'polished'

export const CurrencySelectWrapper = styled.button<{ isLoading: boolean; stubbed: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  gap: 0.5rem;
  border: 0;
  outline: none;
  background-color: ${({ theme, stubbed }) => (stubbed ? lighten(0.1, theme.bg2) : theme.bg1)};
  color: ${({ stubbed, theme }) => (stubbed ? theme.white : theme.text1)};
  box-shadow: ${({ stubbed }) => (stubbed ? '0 6px 8px rgb(0 0 0 / 6%)' : 'none')};
  opacity: ${({ isLoading }) => (isLoading ? 0.6 : 1)};
  border-radius: 16px;
  padding: 8px;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: ${({ stubbed, theme }) => (stubbed ? lighten(0.1, theme.bg2) : lighten(0.1, theme.bg1))};
  }

  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
    justify-content: start;
  `};
`

export const ArrowDown = styled(DropDown)<{ stubbed?: boolean }>`
  margin: 0 5px;

  path {
    stroke: ${({ stubbed, theme }) => (stubbed ? theme.white : theme.text1)};
    stroke-width: 1.5px;
  }

  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-left: auto;
  `};
`

export const CurrencySymbol = styled.div<{ stubbed: boolean }>`
  font-size: 19px;
  font-weight: 500;
  white-space: nowrap;
  color: ${({ stubbed, theme }) => (stubbed ? theme.white : theme.text1)};
`
