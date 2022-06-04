import React from 'react'
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

function NotFound() {
    return(
        <div>
            <Navbar/>
            <h1>Uh-oh!</h1>
            <h1>Esta pagina no existe</h1>
            <h3>Como la encontraste?</h3>
            <img src='https://i.pinimg.com/originals/24/58/5f/24585fc9b7433a224a6ff5506e346969.png' width={500} align="auto" alt="no found" />
            <Footer/>
        </div>
    );
}

export default NotFound;