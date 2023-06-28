import { FC, ReactElement } from 'react'
import * as S from './NoQuieroMasFormularios.styles'
import { noQuieroMasFormularios, risafor } from 'assets'

export const NoQuieroMasFormularios: FC = (): ReactElement => {
	return <S.NoQuieroMasFormularios>
		<img src={noQuieroMasFormularios} alt='No quiero mas formularios'/>
		<audio src={risafor} autoPlay loop/>
	</S.NoQuieroMasFormularios>
}
