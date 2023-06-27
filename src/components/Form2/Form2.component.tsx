import { FC, ReactElement, useCallback, useEffect, useRef, useState } from 'react'
import { positionGenerator } from 'utils'
import * as S from './Form2.styles'
import { Form } from 'types/form'

interface Position {
	x: number
	y: number
}

export const Form2: FC<Form> = ({ onSubmit }): ReactElement => {
	const formRef = useRef<HTMLFormElement>(null)
	const [position, setPosition] = useState<Position>({ x: 600, y: 200 })
	const [speed, setSpeed] = useState<Position>({ x: 1, y: 1 })

	const updatePosition = useCallback((axis: keyof Position, size: number) => {
		const prevPosition = position[axis]
		const prevSpeed = speed[axis]
		return positionGenerator({
			position: prevPosition,
			speed: prevSpeed,
			axis,
			size
		})
	}, [position, speed])

	useEffect(() => {
		if(!formRef.current) return
		const { width, height } = formRef.current.getBoundingClientRect()

		const interval = setInterval(() => {
			const newXValues = updatePosition('x', width)
			const newYValues = updatePosition('y', height)
			setPosition({ x: newXValues.position, y: newYValues.position })
			setSpeed({ x: newXValues.speed, y: newYValues.speed })
		}, 5)

		return () => {
			clearInterval(interval)
		}
	}, [updatePosition])

	return <S.Form2 onSubmit={onSubmit} ref={formRef} left={position.x} top={position.y}>
		<S.Form2InputContainer label='Email'>
			<S.Form2Input type='text' placeholder='afor@afordin.com'/>
		</S.Form2InputContainer>
		<S.Form2InputContainer label='Contraseña'>
			<S.Form2Input type='password' placeholder='∗∗∗∗∗∗∗∗∗'/>
		</S.Form2InputContainer>
		<S.Form2InputContainer label='Confirmar contraseña'>
			<S.Form2Input type='password' placeholder='∗∗∗∗∗∗∗∗∗'/>
		</S.Form2InputContainer>
		<S.Form2Button type='submit'>Registrarse</S.Form2Button>
	</S.Form2>
}