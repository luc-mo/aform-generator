import { FC, ReactElement } from 'react'
import './ZarzaForm.styles.css'
import { Form } from 'types/form'

export const ZarzaForm: FC<Form> = ({ onSubmit }): ReactElement => {
	return <form className='zarzaform' onSubmit={onSubmit}>
		<h1>Concursillo Afordin</h1>

		<label htmlFor="nombre">Nombre:</label>
		<input type="text" id="nombre" name="nombre" required /><br />

		<label htmlFor="email">Email:</label>
		<input type="email" id="email" name="email" required /><br />

		<label>
			<input type="checkbox" name="trolleo_a_goncy" />
			Trolleo a Goncy </label
		><br />

		<label>
			<input type="checkbox" name="me_gustan_los_formularios" />
			Me gustan los formularios </label
		><br />

		<label>
			<input type="checkbox" name="libero_a_los_afordines" />
			Libero a los afordines </label
		><br />

		<label>
			<input type="checkbox" name="soy_una_tete_valenciana" />
			Soy una Tete valenciana </label
		><br />

		<input type="submit" value="Acceder a Zarzahub" />
	</form>
}
