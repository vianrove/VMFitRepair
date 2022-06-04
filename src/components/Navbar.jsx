import { Search, ShoppingBasketOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import styled from 'styled-components'
import {mobile} from "../responsive"

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
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
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
        <Center><Logo>VMFit</Logo></Center>
        <Right> 
          <MenuItem>REGISTRO</MenuItem>
          <MenuItem>LOGIN</MenuItem>
          <MenuItem>  
            <Badge badgeContent={4} color="primary">
              <ShoppingBasketOutlined color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

