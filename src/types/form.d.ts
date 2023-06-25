import { FormEvent } from 'react'

export interface Form {
  onSubmit: <T>(event: FormEvent<HTMLFormElement>) => T
}