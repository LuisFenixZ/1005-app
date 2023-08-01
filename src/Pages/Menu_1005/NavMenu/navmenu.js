import React from "react";
import {Nav, NavLink, NavMenu} from "./navmenuelements";


const NavMenuFood = () => {
    return(
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/burgers" activeStyle> 
                        Hamburguer
                    </NavLink>
                    <NavLink to="/sushis" activeStyle>
                        Sushis
                    </NavLink>
                    <NavLink to="/pizzas" activeStyle>
                        Pizzas
                    </NavLink>
                    <NavLink to="/bebidas" activeStyle>
                        Bebidas
                    </NavLink>
                    <NavLink to="/doces" activeStyle>
                        Doces
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
        
    );
};

export default NavMenuFood;

