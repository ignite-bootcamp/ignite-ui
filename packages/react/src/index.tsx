import { styled } from './styles'

const Button = styled('button', {
  background: '$ignite500',
  width: '$16',
})

export function App() {
  return <Button>Hello World</Button>
}
