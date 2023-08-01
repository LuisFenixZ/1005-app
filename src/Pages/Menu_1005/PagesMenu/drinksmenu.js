import React from 'react';
import NavMenuFood from '../NavMenu/navmenu';
import './menubackground.css'
import './drinksmenu.css'

 
const DrinkMenu = () => {
    return (
        <div>
            <NavMenuFood/>
            <div className='Menu_Background'>
                <section>
                    <div className='Menu_block_soda'>
                        <h1 className='title_menu_soda'>REFRIGERANTES</h1>
                        <p>Refrigerante 2 Litros <strong className='price_color_soft_drinks'>R$ 16,00</strong></p>
                        <p>Refrigerante 600ml <strong className='price_color_soft_drinks'>R$ 8,00</strong></p>
                        <p>Refrigerante KS <strong className='price_color_soft_drinks'>R$ 5,00</strong></p>
                        <p>Água <strong className='price_color_soft_drinks'>R$ 4,00</strong></p>
                        <p>Água Tônica <strong className='price_color_soft_drinks'>R$ 5,00</strong></p>
                        <h1 className='title_menu_juice'>Sucos</h1>
                        <p>Laranja, Manga, Maracuja, Uva, Limão, Morango, Abacaxi e Abacaxi com Hortelã <strong className='price_color_soft_drinks'>R$ 16,00</strong></p>
                        <p className='additional_drinks'>Adicional de Leite Condensado <strong className='price_color_soft_drinks'>R$ 2,00</strong></p>
                        <p className='additional_drinks'>Adicional de Leite <strong className='price_color_soft_drinks'>R$ 2,00</strong></p>
                        <p>Jarra de Suco <strong className='price_color_soft_drinks'>R$ 18,00</strong></p>
                        <p className='additional_drinks'>Adicional de Leite Condensado <strong className='price_color_soft_drinks'>R$ 5,00</strong></p>
                        <p className='additional_drinks'>Adicional de Leite <strong className='price_color_soft_drinks'>R$ 5,00</strong></p>
                        <p>Jarra de Suco de Laranja <strong className='price_color_soft_drinks'>R$ 22,00</strong></p>
                        <p>Limonada Suiça <strong className='price_color_soft_drinks'>R$ 12,00</strong></p>
                        <h3 className='wine_menu'> Vinho </h3>
                        <p>Taça de Vinho <strong className='price_color_soft_drinks'>R$ 10,00</strong></p>
                        <p>Garrafa - Consulte nosso garçom</p>

                        <h1 className='title_menu_chopp'>CHOPPS</h1>
                        <p>Choop Vinho 350ml <strong className='price_color_soft_drinks'>R$ 16,00</strong></p>
                        <p>Choop Vinho 560ml <strong className='price_color_soft_drinks'>R$ 19,00</strong></p>
                        <h3 className='subtitle_menu_choop'>CHOOP STABULU'S <strong className='choop_favor'>Pilsen - Viena - Ipa - Oktoberfest</strong></h3>
                        <p>Choop Stabulu's 350ml <strong className='price_color_soft_drinks'>R$ 15,00</strong></p>
                        <p>Choop Stabulu's 560ml <strong className='price_color_soft_drinks'>R$ 18,00</strong></p>
                        <p>Torre Choop Stabulu's 3,5L <strong className='price_color_soft_drinks'>R$ 91,00</strong></p>
                        <h3 className='subtitle_menu_choop'>CHOOP STELLA ARTOIS</h3>
                        <p>Choop Stella Artois 400ml <strong className='price_color_soft_drinks'>R$ 16,00</strong></p>
                        <p>Torre Choop Stella Artois 3,5L <strong className='price_color_soft_drinks'>R$ 121,00</strong></p>
                        <h3 className='subtitle_menu_choop'>CHOOP BRAHMA</h3>
                        <p>Choop Brahma 350ml <strong className='price_color_soft_drinks'>R$ 15,00</strong></p>
                        <p>Choop Brahma 560ml <strong className='price_color_soft_drinks'>R$ 17,00</strong></p>
                        <p>Choop Brahma Black 400ml <strong className='price_color_soft_drinks'>R$ 17,00</strong></p>
                        <p>Torre Choop Brahma 3,5L <strong className='price_color_soft_drinks'>R$ 99,00</strong></p>
                        <h3 className='subtitle_menu_choop'>CERVEJA LONG NECK</h3>
                        <p>Consultar disponíveis <strong className='price_color_soft_drinks'>R$ 10,00</strong></p>
                        <h3 className='subtitle_menu_choop'>CERVEJA 600ml</h3>
                        <p>Original e Heineken <strong className='price_color_soft_drinks'>R$ 15,00</strong></p>
                        
                    </div>
                </section>
            </div>
        </div>
    );
}
 
export default DrinkMenu;