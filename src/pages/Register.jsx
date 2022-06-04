import styled from 'styled-components';
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient( rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url("https://i.ibb.co/rt99CZC/gimbackground.jpg");
    background-size: cover;
`;

const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
    ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
    padding: 20px;
    font-weight: 600;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 10px;
    margin-top: 20px;
    background-color: #f8dfdf;
    color: black;
    cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Registro</Title>
            <Form>
                <Input placeholder="Nombre" />
                <Input placeholder="Apellido" />
                <Input placeholder="Ciudad" />
                <Input placeholder="Dirección" />
                <Input placeholder="Correo" />
                <Input placeholder="Teléfono" />
                <Input placeholder="Contraseña" />
                <Input placeholder="Repetir contraseña" />
                <Button>Crear cuenta</Button>
            </Form>
        </Wrapper>            
    </Container>
  )
}

export default Register