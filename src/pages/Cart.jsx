import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { mobile } from '../responsive';

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 400;
    text-align: center;
    ${mobile({ fontSize: "18px", marginBottom: "20px" })}
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ justifyContent: "space-around" })}

`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props)=>props.type === "filled" && "none"};
    background-color: ${(props)=>props.type === "filled" ? "black" : "transparent"};
    color: ${(props)=>props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
    display: flex;
    flex: 2;
`;
const Image = styled.img`
    width: 200px;
    object-fit: cover;
    ${mobile({ width: "150px"})}
`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const Name = styled.span``;
const Id = styled.span``;
const Price = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const CantidadContainer = styled.div`
    display: flex;
    align-items: center;
`;
const Cantidad = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}

`;
const Total = styled.div`
    font-size: 30px;
    font-weight: 300;
    ${mobile({ marginBottom: "20px" })}

`;
const Peso = styled.div``;

const Summary = styled.div`
    flex: 1;
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
    ${mobile({ margin: "20px 0px" })}
`;

const SummaryTitle = styled.h1`
    font-weight: 300;
`;
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props)=>props.title === "total" && "600"};
    font-size: ${(props)=>props.title === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
`;

const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>Tu carrito de compras</Title>
            <Top>
                <TopButton>Seguir comprando</TopButton>
                <TopTexts>
                    <TopText>Carrito (4)</TopText>
                    <TopText>Lista de deseos (0)</TopText>
                </TopTexts>
                <TopButton type="filled">Proceder al pago</TopButton>
                
            </Top>
            <Bottom>

                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://i.ibb.co/4mrZgCF/Figure-Dumbbell-Hantel.png"/>
                            <Details>
                                <Name><b>Product:</b> Mancuernas Hagel</Name>
                                <Id><b>ID:</b> 218</Id>
                                <Peso><b>Peso:</b> 25</Peso>
                            </Details>
                        </ProductDetail>
                        <Price>
                            <CantidadContainer>
                                <Add />
                                <Cantidad>2</Cantidad>
                                <Remove />
                            </CantidadContainer>
                            <Total>180.000</Total>
                        </Price>
                    </Product>
                    <hr />
                    <Product>
                        <ProductDetail>
                            <Image src="https://i.ibb.co/4mrZgCF/Figure-Dumbbell-Hantel.png"/>
                            <Details>
                                <Name><b>Product:</b> Mancuernas Hagel</Name>
                                <Id><b>ID:</b> 218</Id>
                                <Peso><b>Peso:</b> 25</Peso>
                            </Details>
                        </ProductDetail>
                        <Price>
                            <CantidadContainer>
                                <Add />
                                <Cantidad>2</Cantidad>
                                <Remove />
                            </CantidadContainer>
                            <Total>180.000</Total>
                        </Price>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Resumen de la orden</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>360.000</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>360.000</SummaryItemPrice>
                    </SummaryItem>
                    <Button>Proceder al pago</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart