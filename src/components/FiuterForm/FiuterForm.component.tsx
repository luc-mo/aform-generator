import { FC, FormEvent, ReactElement, useState } from 'react'
import { Form } from 'types/form'
import { afor, afordin, github } from 'assets'
import * as S from './FiuterForm.styles'

export const FiuterForm: FC<Form> = ({ onSubmit }): ReactElement => {
	const [showSubmitButton, setShowSubmitButton] = useState<boolean>(true)

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		setShowSubmitButton(false)
		onSubmit(event)
	}

	return <S.FiuterContainer>
		<S.FiuterNav>
			<S.Logo src={afordin} alt='afordin'/>
			<S.FiuterButton as='a' href='https://github.com/Afordin' target='_blank' rel='noopener noreferrer'>
				Empezar gratis
			</S.FiuterButton>
		</S.FiuterNav>
		<S.FiuterMain>
			<S.FiuterForm onSubmit={handleSubmit}>
				<S.FiuterFormTitle>
					Lleva tu formulario
					<div>
						al <span>siguiente nivel</span>
					</div>
				</S.FiuterFormTitle>
				<S.FiuterFormSubtitle>
					Afordin te ofrece la capacidad de crear formularios a
					medida y maximizar el impacto del email marketing.
				</S.FiuterFormSubtitle>
				<S.FiuterFormInputsContainer>
					<S.FiuterFormInput type='text' placeholder='Nombre' required/>
					<S.FiuterFormInput type='email' placeholder='Email' required/>
					<S.FiuterFormInput type='phone' placeholder='Teléfono' required/>
					<S.FiuterFormInput type='text' placeholder='Empresa' required/>
				</S.FiuterFormInputsContainer>
				{showSubmitButton && <S.FiuterButton type='submit'>Empezar gratis</S.FiuterButton>}
			</S.FiuterForm>
			<S.FiuterImageContainer>
				<S.FiuterImage src={afor} alt='afor'/>
			</S.FiuterImageContainer>
		</S.FiuterMain>
		<S.FiuterFooter>
			<S.FiuterSocial>
				<h3>Follow us</h3>
				<a href='https://github.com/Afordin' target='_blank' rel='noopener noreferrer'>
					<img src={github} alt='github'/>
				</a>
			</S.FiuterSocial>
			<div>
				<h3>Contact us</h3>
				<p>
					<span>info@afordin.com</span>
					<span>+12 345 678 910</span>
				</p>
			</div>
			<div>
				<h3>Legal</h3>
				<p>
					<span>We don't have</span>
					<span>any legal info</span>
				</p>
			</div>
			<S.FiuterRightsReserved>
				© 2021 Afordin. None rights reserved.
			</S.FiuterRightsReserved>
		</S.FiuterFooter>
		<S.FiuterBlur/>
	</S.FiuterContainer>
}
