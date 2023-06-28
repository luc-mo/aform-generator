import { FC, ReactElement } from 'react'
import { Form } from 'types/form'
import './CoviForm.styles.scss'

export const CoviForm: FC<Form> = ({ onSubmit }): ReactElement => {
	return <form className="form" action="#" target="" method="get" name="formDatosPersonales" onSubmit={onSubmit}>
		<label className="label" htmlFor="nombre">Nombre:</label>
		<input className="input" type="text" name="nombre" id="nombre" placeholder="Escribe tu nombre" required />

		<label className="label" htmlFor="apellidos">Apellidos:</label>
		<input className="input" type="text" name="apellidos" id="apellidos" placeholder="Apellidos" required />

		<label className="label" htmlFor="email">Email:</label>
		<input className="input" type="email" name="email" id="email" placeholder="Email" required />

		<label className="label" htmlFor="asunto">Asunto:</label>
		<input className="input" type="text" name="asunto" id="asunto" placeholder="Título de la consulta" required />

		<label className="label" htmlFor="mensaje">Mensaje:</label>
		<textarea className="text" name="mensaje" placeholder="Describe brevemente en menos de 300 carácteres" maxLength={300} required></textarea>
		<input className="button" type="submit" name="enviar" value="Enviar datos" />
	</form>
}
