import React from 'react';
import NavMenuFood from '../NavMenu/navmenu';
import './menubackground.css'
import './pizzasmenu.css'

 
const PizzaMenu = () => {
    return (
        <div>
            <NavMenuFood/>
            <div className='Menu_Background'>
                    <div className='Menu_right'>
                        <h1 className='title_menu'>PIZZAS PROMOCIONAIS</h1>
                        <h3 className='subtitle_menu'>MINIㅤㅤPEQUENAㅤㅤMÉDIAㅤㅤGRANDEㅤㅤGIGANTEㅤㅤEXAGERADA</h3>
                        <h3 className='subtitle_menu'>12 38 42 52 58 68</h3>
                        </div>
                    </div>
                </div>
    );
}
 
export default PizzaMenu;