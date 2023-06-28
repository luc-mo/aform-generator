import { FC, ReactElement } from 'react'
import { Form } from 'types/form'
import {
  FieldName,
  FieldSet,
  FormName,
  Input,
  RadioContainer,
  Form as StyledForm,
  SubmitButton,
  Textarea,
} from './NasitaForm.styles'

const OPTIONS = [
  {
    label:
      'Cómo poner un bumper justo delante de alguien y que nadie se lo coma',
    value: 'bumper',
  },
  {
    label: 'Cómo me convertí en una señora hacker',
    value: 'hacker',
  },
  {
    label: 'Por qué amo los formularios',
    value: 'form',
  },
  {
    label: 'Todo sobre PHP y Laravel',
    value: 'php',
  },
]

export const NasitaForm: FC<Form> = ({ onSubmit }): ReactElement => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <FormName>Inscripción para el Marcos.show</FormName>

      <FieldSet>
        <label htmlFor="topic">
          <FieldName>Nombre</FieldName>
        </label>
        <Input
          name="name"
          onChange={(event) => {
            const updatedValue = event.target.value
            event.target.value = 'La jefa'.slice(0, updatedValue.length)
          }}
          required
        />
      </FieldSet>

      <FieldSet>
        <FieldName>Selecciona el tema de la charla</FieldName>
        {OPTIONS.map((option) => (
          <RadioContainer>
            <Input
              key={option.value}
              id="topic-value"
              name="topic"
              type="radio"
              value={option.value}
              required
            />
            <label htmlFor="topic">
              <span>{option.label}</span>
            </label>
          </RadioContainer>
        ))}
      </FieldSet>

      <FieldSet>
        <label htmlFor="topic">
          <FieldName>Cuéntame sobre ti</FieldName>
        </label>
        <Textarea
          onChange={(event) => {
            const updatedValue = event.target.value
            event.target.value = 'Soy malísima en el golfito'.slice(
              0,
              updatedValue.length,
            )
          }}
          required
        />
      </FieldSet>

      <SubmitButton>Confirmar</SubmitButton>
    </StyledForm>
  )
}
