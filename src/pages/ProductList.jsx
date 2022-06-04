import styled from "styled-components"
import { Navbar } from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Containter = styled.div`

`;
const Title = styled.h1`
    margin: 20px;
    ${mobile({ fontSize: "24px" })}
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    
`;
const Filter = styled.div`
    margin: 20px;
    
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    ${mobile({ fontSize: "18px", fontWeight: 400 })}
`;

const Select = styled.select`
    padding: 10px;
    font-weight: 400;
`;

const Option = styled.option`

`;

const ProductList = () => {
  return (
    <Containter>
        <Navbar />
        <Announcement />
        <Title>Nuestro equipamiento</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filtrar por:</FilterText>
                <Select>
                    <Option disabled selected>Tipo</Option>
                    <Option>Equipamiento</Option>
                    <Option>Máquinas</Option>
                    <Option>Bancos</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Ordenar por:</FilterText>
                <Select>
                <Option disabled selected>Precio</Option>
                <Option>Menor precio</Option>
                <Option>Mayor precio</Option>
                </Select>                
            </Filter>
        </FilterContainer>
        <Products />
        <Footer />
    </Containter>
  )
}

export default ProductList