import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient( rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url("https://i.ibb.co/g6NcHxr/gymbackground2.jpg");
    background-size: cover;
    
`;

const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
    ${mobile({ width: "50%" })}
`;

const Title = styled.h1`
    padding: 20px;
    font-weight: 600;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
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

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Ingresar</Title>
            <Form>
                <Input placeholder="Email" />
                <Input placeholder="Contraseña" />
                <Button>Ingresar</Button>
                <Link>Recuperar contraseña</Link>
                <Link href='/Register'>Crear cuenta</Link>
            </Form>
        </Wrapper>            
    </Container>
  )
}

export default Login