import { FC, FormEvent, ReactElement, useCallback, useState } from 'react'
import { AitorForm } from 'components/AitorForm'
import { FiuterForm } from 'components/FiuterForm'
import { Form1 } from 'components/Form1'
import { Form2 } from 'components/Form2'
import { ScirgaForm } from 'components/ScirgaForm'
import { CoviForm } from 'components/CoviForm'
import { ZarzaForm } from 'components/ZarzaForm'

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
      {formCount > 2 && <Form2 onSubmit={handleFormCount}/>}
      {formCount > 3 && <ScirgaForm onSubmit={handleFormCount}/>}
      {formCount > 4 && <CoviForm onSubmit={handleFormCount}/>}
      {formCount > 5 && <ZarzaForm onSubmit={handleLast}/>}
    </>
  )
}
