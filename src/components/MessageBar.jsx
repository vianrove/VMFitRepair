import styled from 'styled-components'
import { mobile } from "../responsive"

const Bar = styled.h1`
  height:75px;
  background-color: #f8dfdf;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 25px;
  ${mobile({ fontSize: "18px", fontWeight: 400 })}
`;

const MessageBar = () => {
  return (
    <Bar>NUESTROS PRODUCTOS MÁS POPULARES</Bar>
  )
}

export default MessageBar