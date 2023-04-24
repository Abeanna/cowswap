import styled from 'styled-components/macro'
import { ButtonError } from 'components/Button'
import { ChangeEventHandler, KeyboardEventHandler, ReactNode, useCallback, useState } from 'react'

const Container = styled.div``
const Instruction = styled.p`
  margin: 0;
`
const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.border2};
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 4px;
  background: ${({ theme }) => theme.bg3};
  color: ${({ theme }) => theme.text1};
  outline: none;
  font-size: 15px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.blue2};
  }
`

interface ConfirmedButtonProps {
  className?: string
  onConfirm: () => void
  children?: ReactNode
  action: string
  confirmWord: string
}

function isValidConfirm(value: string, confirmWord: string): boolean {
  return typeof value === 'string' && value.toLowerCase().trim() === confirmWord
}

export function ConfirmedButton({ className, onConfirm, children, action, confirmWord }: ConfirmedButtonProps) {
  const [inputValue, setInputValue] = useState('')
  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => setInputValue(event.target.value ?? '')
  const shouldButtonBeDisabled = !isValidConfirm(inputValue, confirmWord)
  const onKeyDown: KeyboardEventHandler = useCallback(
    (event) => {
      if (event.key.toLowerCase() !== 'enter' || shouldButtonBeDisabled) {
        return
      }

      onConfirm()
    },
    [onConfirm, shouldButtonBeDisabled]
  )

  return (
    <Container className={className} onKeyDown={onKeyDown}>
      <Instruction>
        Please type the word <strong>"{confirmWord}"</strong> to {action}.
      </Instruction>
      <Input onChange={onInputChange} />
      <ButtonError error padding={'12px'} disabled={shouldButtonBeDisabled} onClick={onConfirm}>
        {children}
      </ButtonError>
    </Container>
  )
}
