import styled from 'styled-components'

export const Form = styled.form`
  position: absolute;
  top: 200px;
  left: 20px;
  background-color: rgb(167 243 208);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 6px;
  z-index: 6;
`

export const FieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: 0;
  gap: 8px;
`

export const FormName = styled.span`
  font-size: 32px;
  font-weight: 600;
`

export const RadioContainer = styled.div`
  display: flex;
  gap: 8px;
`

export const FieldName = styled.span`
  font-size: 18px;
  font-weight: 600;
`

export const Input = styled.input`
  padding: 12px;
  border: none;
  background-color: rgb(52 211 153);
  border-radius: 2px;
`

export const Textarea = styled.textarea`
  padding: 12px;
  border: none;
  background-color: rgb(52 211 153);
  border-radius: 2px;
`

export const SubmitButton = styled.button`
  font-size: 16px;
  border-radius: 2px;
  padding: 16px;
  border: none;
  background-color: rgb(52 211 153);
`
