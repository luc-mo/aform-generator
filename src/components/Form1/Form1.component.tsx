import { FC, ReactElement } from 'react'
import { Form } from 'types/form'
import * as S from './Form1.styles'

export const Form1: FC<Form> = ({ onSubmit }): ReactElement => {
	return <S.Form1 onSubmit={onSubmit}>
		<section>
			<label>Nombre</label>
			<input type='password'/>
		</section>
		<section>
			<label>Contraseña</label>
			<input/>
		</section>
		<button>Iniciar sesion</button>
	</S.Form1>
}
