import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: salmon;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;

`;

const Announcement = () => {
  return (
    <Container>ENVÍOS GRATIS POR COMPRAS SUPERIORES A 125.000</Container>
  )
}

export default Announcement