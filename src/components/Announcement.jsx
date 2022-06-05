import styled from "styled-components"
import React from "react";
import { Link } from "react-router-dom"

const Container = styled.span`
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Announcement = () => {
  return (
    <Container><StyledLink to="/ProductList">ENVÍOS GRATIS POR COMPRAS SUPERIORES A 125.000</StyledLink></Container>
  )
}

export default Announcement