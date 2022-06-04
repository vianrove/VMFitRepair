import React from 'react'
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components"

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const MessageBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function NotFound() {
    return(
        <Container>
            <Navbar/>
            <MessageBox>
                <h1>Uh-oh!</h1>
                <h1>Esta pagina no existe</h1>
                <h3>Como la encontraste?</h3>
                <img 
                    src='https://i.pinimg.com/originals/24/58/5f/24585fc9b7433a224a6ff5506e346969.png' 
                    width={400} 
                    align="auto" 
                    alt="no found" 
                />
            </MessageBox>            
            <Footer/>
        </Container>
    );
}

export default NotFound;