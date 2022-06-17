import styled from 'styled-components'
import { dimensions, styles } from '../../theme'

const Card = styled.div`
  background-color: #fff;
  border-radius: ${dimensions.borderRadius}px;
  box-shadow: ${styles};
  display: flex;
  align-items: column;
`

export default Card
