import { AitorForm } from 'components/AitorForm'
import { FiuterForm } from 'components/FiuterForm'
import { Form1 } from 'components/Form1'
import { Form2 } from 'components/Form2'
import { FC, FormEvent, ReactElement, useCallback, useState } from 'react'

export const App: FC = (): ReactElement => {
  const [formCount, setFormCount] = useState<number>(0)

  const handleFormCount = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormCount(prev => prev + 1)
  }, [])

  const handleLast = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  }

  return (
    <>
      <FiuterForm onSubmit={handleFormCount}/>
      {formCount > 0 && <Form1 onSubmit={handleFormCount} />}
      {formCount > 1 && <AitorForm onSubmit={handleFormCount} />}
      {formCount > 2 && <Form2 onSubmit={handleLast}/>}
    </>
  )
}
