import { FormEvent } from 'react'

export interface Form {
  onSubmit: (event: FormEvent<HTMLFormElement>) => any
}