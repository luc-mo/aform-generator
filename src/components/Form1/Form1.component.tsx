import { FC, ReactElement } from 'react'
import { Form } from 'types/form'
import * as S from './Form1.styles'

export const Form1: FC<Form> = ({ onSubmit }): ReactElement => {
	return <S.Form1 onSubmit={onSubmit}>
		<section>
			<label>Nombre</label>
			<input type='password' required/>
		</section>
		<section>
			<label>Contraseña</label>
			<input type='text' required/>
		</section>
		<button type='submit'>Iniciar sesion</button>
	</S.Form1>
}
