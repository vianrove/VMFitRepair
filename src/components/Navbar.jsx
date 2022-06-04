import { Search, ShoppingBasketOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import styled from 'styled-components';
import {mobile} from "../responsive";
import React from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: #f8dfdf;
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex:1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
  
`;
const SeacrchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex:1;
  text-align: center;
`;

const Logo = styled.h1`
  ${mobile({ fontSize: "25px" })}
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Right = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration-line: none;
  color: black;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const StyledLink = styled(Link)`
  cursor: pointer;
    text-decoration: underline;
    color: black;
    margin: 10px 0px;
    ${mobile({ fontSize: "15px",  })}
`;

const IconLink = styled(Link)`

`;

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ES</Language>
          <SeacrchContainer> 
            <Input placeholder="Buscar"/>
            <Search />
          </SeacrchContainer>
        </Left>
        <Center><LogoLink to="/"><Logo>VMFit</Logo></LogoLink></Center>
        <Right> 
          <MenuItem><StyledLink to="/Register">REGISTRO</StyledLink></MenuItem>
          <MenuItem><StyledLink to="/Login">LOGIN</StyledLink></MenuItem>
          <MenuItem>
            <IconLink to="/Cart">
              <Badge badgeContent={4} color="primary">
                <ShoppingBasketOutlined color="action" />
              </Badge>
            </IconLink>            
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

