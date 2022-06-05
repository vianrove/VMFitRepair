import { FavoriteBorderOutlined, SearchOutlined, ShoppingBasketOutlined } from "@material-ui/icons";
import styled from "styled-components"
import React from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

`;

const Image = styled.img`
    height: 75%;
    max-width: 75%;
    object-fit: scale-down;
`;

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0; 
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #574e4e7c;
    transition: all 250ms ease;
    cursor: pointer;

    &:hover {
        opacity: 100%;
    }
    
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 250ms ease;
    cursor: pointer;

    &:hover{
        background-color: #f8dfdf;
        transform: scale(1.1);
    }
`;

const StyledLink = styled(Link)`
    color: black;
`;

const Product = ({item}) => {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
            <StyledLink to="/Cart">
                <Icon>
                    <ShoppingBasketOutlined />
                </Icon>
            </StyledLink>
            <StyledLink 
                to={`/Product/${item.id}`}
                key={item.id}
            >            
                <Icon>
                    <SearchOutlined />
                </Icon>                
            </StyledLink>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product