interface PositionGenerator {
  position: number
  speed: number
  size: number
  axis: 'x' | 'y'
}

interface Return {
  position: number
  speed: number
}

export const positionGenerator = ({ position, speed, size, axis }: PositionGenerator): Return => {
  const next = position + speed
  if(axis === 'x') {
    if(next + size > window.innerWidth) return { position: window.innerWidth - size, speed: speed * -1 }
    else if(next < 0) return { position: 0, speed: speed * -1 }
    return { position: next, speed }
  } else {
    if(next + size > window.innerHeight) return { position: window.innerHeight - size, speed: speed * -1 }
    else if(next < 0) return { position: 0, speed: speed * -1 }
    return { position: next, speed }
  }
}