
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ flexDirection: "column" })}
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



const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImgContainer>
                <Image src="https://i.ibb.co/4mrZgCF/Figure-Dumbbell-Hantel.png" />
            </ImgContainer>
            <InfoContainer>
                <Title>Mancuernas Hantel</Title>
                <Desc>Set de mancuernas marca Hantel. Con recubrimiento
                    de goma que añade seguridad y una calidad 
                    excepcional.
                </Desc>
                <Price>COP 180.000</Price>
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
                    <Button>Agregar al carrito</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Product