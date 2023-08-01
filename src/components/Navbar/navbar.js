import React from "react";
import {Nav, NavLink, NavMenu} from "./navbarelements";


const Navbar = () => {
    return(
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle> 
                        Início
                    </NavLink>
                    <NavLink to="/cardapio" activeStyle>
                        Cardápio
                    </NavLink>
                    <NavLink to="/minha-conta" activeStyle>
                        Login/Registro
                    </NavLink>
                    <NavLink to="/carrinho" activeStyle>
                        Carrinho
                    </NavLink>
                </NavMenu>
            </Nav>
            <div>
                <br></br>
                <hr></hr>
            </div>
        </>
        
    );
};

export default Navbar

