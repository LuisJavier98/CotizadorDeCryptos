import styled from '@emotion/styled'

const Mistake = styled.p`
  color:#FFF;
  background-color:#B7322C;
  padding:15px 0;
  text-align:center;
  font-weight:800;
  border-radius:10px
`

const Error = ({ children }) => {
  return (
    <Mistake>{children}</Mistake>
  )
}

export default Error