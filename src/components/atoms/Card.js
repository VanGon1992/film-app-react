import styled from 'styled-components'
import { dimensions, styles } from '../../theme'

const Card = styled.div`
  box-shadow: ${styles.boxShadow};
  display: flex;
  flex-direction: column;
  padding: ${dimensions.padding1}rem;
  height: 28rem;
  margin: 0.5rem;
`

export default Card
