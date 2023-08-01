import React from 'react';
import NavMenuFood from '../NavMenu/navmenu';
import './menubackground.css'
import './sushismenu.css'
 
const SushiMenu = () => {
    return (
        <div>
            <NavMenuFood/>
                <div className='Menu_Background'>
                    <div className='Menu'>
                        <h1>Teste Base</h1>
                        <p>Teste de Parágrafo</p>
                    </div>
                {/*<img src='https://cdn.discordapp.com/attachments/1108351859443384430/1118178934350159872/PHOTO-2023-01-14-22-37-13.jpg'></img>*/}
                </div>
        </div>
    );
}
 
export default SushiMenu;