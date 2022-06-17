import styled from 'styled-components'

const Title = styled.h1.attrs((props) => ({
  as: `h${props.h}`,
  children: props.children,
}))``

export default Title
