
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { mobile } from "../responsive";
import React from "react";
import {Link, useParams } from "react-router-dom"
import { getProduct } from "../data";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ flexDirection: "column" })}
`;
const TopBanners = styled.div`

`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
`;

const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
    ${mobile({ padding: "0px" })}
`;

const Title = styled.h1`
    font-weight: 600;
`;

const Price = styled.p`
    font-weight: 400;
    font-size: 30px;
`;

const Desc = styled.div`
    margin: 20px 0px;
    font-weight: 200;
`;

const FilterContainer = styled.div`
    margin: 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FilterTitle = styled.p`
    margin-right: 5px;
`;

const Select = styled.select`
    padding: 10px;
    font-weight: 400;
`;

const Option = styled.option`

`;

const AddContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const AmountContainer = styled.div`
    margin: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border: 1px solid black;
    margin: 0px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Button = styled.button`
    padding: 15px;
    background-color: white;
    border: 1px solid black;
    cursor: pointer;
    transition-duration: 250ms;

    &:hover{
        background-color:#9b89892f;
    }
`;

const StyledLink = styled(Link)`

`;

const Product = () => {
    let params = useParams();
    let product = getProduct(parseInt(params.productId, 10));
  return (
    <Container>
        <TopBanners>
            <Navbar />
            <Announcement />
        </TopBanners>
        <Wrapper>
            <ImgContainer>
                <Image src={product.img} />
            </ImgContainer>
            <InfoContainer>
                <Title>{product.name}</Title>
                <Desc>{product.desc}</Desc>
                <Price>COP {product.price}</Price>
                <FilterContainer>
                    <FilterTitle>Peso</FilterTitle>
                    <Select>
                        <Option disabled selected>Eliga una opción</Option>
                        <Option>15kg</Option>
                        <Option>25kg</Option>
                        <Option>35kg</Option>
                        <Option>45kg</Option>
                        <Option>75kg</Option>
                    </Select>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                    </AmountContainer>
                    <StyledLink to="/Cart"><Button>Agregar al carrito</Button></StyledLink>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Product