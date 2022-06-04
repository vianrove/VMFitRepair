import styled from "styled-components";
import { mobile } from "../responsive";
import React from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
    background-color: #f8dfdf;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const Logo = styled.h1`
    font-size: 25px;
    font-weight: 600;
    padding: 10px;
`;

const Desc = styled.p`
    font-size: 14px;
    padding-left: 10px;
    ${mobile({ display: "none" })}
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    justify-content: flex-end;
    ${mobile({ padding: "15px" })}
`;

const Title = styled.h1`
    font-size: 24px;
    ${mobile({ fontSize: "18px" })}
`;

const FooterLink = styled(Link)`
    cursor: pointer;
    text-decoration: underline;
    color: black;
    margin: 10px 0px;
    ${mobile({ fontSize: "15px",  })}
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  color: black;
`;


const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <LogoLink to="/"><Logo>VMFit</Logo></LogoLink>
                <Desc>Somos una empresa que se dedica a la venta y mantenimiento
                    de equipos de gimnasio. Con más de 10 años de experiencia nos
                    podemos comprometer a servir el mejor servicio!
                </Desc>
            </Left>
            <Right>
                <Title>Nuestros servicios</Title>
                <FooterLink to="/ProductList">Todos nuestros productos</FooterLink>
                <FooterLink to="/Request">Agendar una revisión</FooterLink>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Footer