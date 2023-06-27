import styled from 'styled-components'

export interface Form2Props {
  top: number
  left: number
}

export interface Form2InputProps {
  label: string
}

export const Form2 = styled.form<Form2Props>`
  position: absolute;
  top: ${(props: Form2Props) => props.top}px;
  left: ${(props: Form2Props) => props.left}px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 300px;
  padding: 32px;
  background-color: #1da896;
  font-family: 'Inter', sans-serif;
  border-radius: 8px;
  z-index: 2;
`

export const Form2InputContainer = styled.div<Form2InputProps>`
  position: relative;
  &::before {
    position: absolute;
    content: '${(props) => props.label}';
    top: -12px;
    left: -10px;
    padding: 4px 8px;
    font-size: 14px;
    color: #f9f5e1;
    background-color: #fc7853;
    border-radius: 6px;
    z-index: 1;
  }
`

export const Form2Input = styled.input`
  position: relative;
  width: 100%;
  height: 50px;
  padding: 0 12px;
  background-color: #f9f5e1;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  outline: none;
`

export const Form2Button = styled.button`
  width: 100%;
  height: 36px;
  background-color: #fc7853;
  font-size: 16px;
  color: #f9f5e1;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
`