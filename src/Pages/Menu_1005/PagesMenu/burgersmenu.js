import React from 'react';
import NavMenuFood from '../NavMenu/navmenu';
import './menubackground.css'
import './burgersmenu.css'

 
const HamburguerMenu = () => {
    return (
        <div>
            <NavMenuFood/>
                <div className='Menu_Background'>
                    <div className='Menu_right'>
                        <h1 className='title_menu'>LANCHES</h1>
                        <h3 className='subtitle_menu'>01 - 1005 Burger - <strong className='price_color'>R$ 24,00</strong> <button class="button button1">+</button></h3>
                        <p className='description_menu'>Pão especial tostado, hamburguer bovino, queijo mussarela e maionese da casa</p>
                        <h3 className='subtitle_menu'>02 - 1005 Burger Kids - <strong className='price_color'>R$ 18,00</strong> <button class="button button1">+</button></h3>
                        <p className='description_menu'>Mini-pão especial tostado, hamburguer bovino, queijo mussarela e maionese da casa</p>
                        <h3 className='subtitle_menu'>03 - 1005 Salada - <strong className='price_color'>R$ 28,00</strong></h3>
                        <p className='description_menu'>Pão especial tostado, hamburguer bovino, queijo mussarela, alface, rodelas de tomate, pepino agridoce e maionese da casa</p>
                        <h3 className='subtitle_menu'>04 - 1005 Bacon - <strong className='price_color'>R$ 34,00</strong></h3>
                        <p className='description_menu'>Pão especial tostado, hamburguer bovino, queijo mussarela, fatias de bacon fritas, rodelas de tomate, pepino agridoce e maionese da casa</p>
                        <h3 className='subtitle_menu'>05 - 1005 Calabresa - <strong className='price_color'>R$ 34,00</strong></h3>
                        <p className='description_menu'>Pão especial tostado, hamburguer bovino, queijo mussarela, fatias de linguiça calabresa fritas, alface, rodelas de tomate, pepino agridoce e maionese da casa</p>
                        <h3 className='subtitle_menu'>06 - 1005 Eggs - <strong className='price_color'>R$ 32,00</strong></h3>
                        <p className='description_menu'>Pão especial tostado, hamburguer bovino, queijo mussarela, ovo frito, rodelas de tomate, pepino agridoce e maionese da casa</p>
                        <h3 className='subtitle_menu'>07 - 1005 Frango - <strong className='price_color'>R$ 32,00</strong></h3>
                        <p className='description_menu'>Pão especial tostado, queijo mussarela, tiras de frango, alface, rodelas de tomate, pepino agridoce e maionese da casa</p>
                        <h3 className='subtitle_menu'>08 - 1005 Frango Bacon Eggs - <strong className='price_color'>R$ 40,00</strong></h3>
                        <p className='description_menu'>Pão especial tostado, queijo mussarela, tiras de frango, fatias de bacon, ovo frito, alface, rodelas de tomate, pepino agridoce e maionese da casa</p>
                        <h1 className='new_release'>EXPERIMENTE NOSSO <strong className='new_release_strong'>X-POLENTA</strong></h1>
                        <img className='food_photo' src='https://cdn.discordapp.com/attachments/1108351859443384430/1128697624665522176/X-Polenta.jpg'></img>
                        <h3 className='subtitle_menu'>09 - 1005 Polenta Vegetariano - <strong className='price_color'>R$ 44,00</strong></h3>
                        <p className='description_menu'>Polenta, hamburguer de soja, queijo cheddar, ovo frito, barbecue, alface, rodelas de tomate, pepino agridoce e maionese da casa</p>
                        <h3 className='subtitle_menu'>10 - 1005 Polenta Calabresa Eggs - <strong className='price_color'>R$ 42,00</strong></h3>
                        <p className='description_menu'>Polenta, hamburguer bovino, queijo cheddar, ovo frito, alface, fatias de linguiça calabresa fritas, rodelas de tomate, pepino agridoce e maionese da casa</p>
                        <h3 className='subtitle_menu'>11 - 1005 Polenta Costela - <strong className='price_color'>R$ 46,00</strong></h3>
                        <p className='description_menu'>Polenta, costela desfiada, queijo cheddar, pico de galo (vinagrete de cebola e tomate) e maionese da casa</p>
                        <h3 className='subtitle_menu'>12 - 1005 Polenta Frango - <strong className='price_color'>R$ 32,00</strong></h3>
                        <p className='description_menu'>Polenta, tiras de frango, queijo cheddar, alface, fatias de linguiça calabresa fritas, rodelas de tomate, pepino agridoce e maionese da casa</p>
                        <h3 className='subtitle_menu'>13 - 1005 Polenta Mignon - <strong className='price_color'>R$ 46,00</strong></h3>
                        <p className='description_menu'>Polenta, tiras de mignon, queijo cheddar, pico de galo (vinagrete de cebola e tomate) e maionese da casa</p>
                           <div className='align_texts'>
                        <h1 className='title_menu_left'>ESPECIAIS</h1>
                        <h3 className='subtitle_menu_left'>14 - Triple 1005 Burger - <strong className='price_color'>R$ 48,00</strong></h3>
                        <p className='description_menu_left'>Pão especial tostado, 02 hamburgueres bovinos, tiras de frango, queijo cheddar, fatias de bacon e maionese da casa</p>
                        <h3 className='subtitle_menu_left'>15 - Duo - <strong className='price_color'>R$ 46,00</strong></h3>
                        <p className='description_menu_left'>Pão especial tostado, 02 hamburgueres bovinos, molho barbecue, queijo cheddar, fatias de bacon e maionese da casa</p>
                        <h3 className='subtitle_menu_left'>16 - Arriba - <strong className='price_color'>R$ 42,00</strong></h3>
                        <p className='description_menu_left'>Pão especial tostado, hamburguer bovino, queijo cheddar, doritos, pico de galo (vinagrete de cebola e tomate) e maionese da casa</p>
                        <h3 className='subtitle_menu_left'>17 - Orion - <strong className='price_color'>R$ 42,00</strong></h3>
                        <p className='description_menu_left'>Pão especial tostado, hamburguer bovino, queijo cheddar, cebola caramelizada, molho barbecue, bacon e maionese da casa</p>
                        <h3 className='subtitle_menu_left'>18 - Bacon Calabresa Eggs - <strong className='price_color'>R$ 44,00</strong></h3>
                        <p className='description_menu_left'>Pão especial tostado, hamburguer bovino, ovo frito, queijo cheddar, fatias de bacon, fatias de linguiça calabresa, alface, rodelas de tomate, pepino agridoce e maionese da casa</p>
                        <h3 className='subtitle_menu_left'>19 - Costela - <strong className='price_color'>R$ 46,00</strong></h3>
                        <p className='description_menu_left'>Pão especial tostado, costela desfiada, queijo cheddar, pico de galo (vinagrete de cebola e tomate) e maionese da casa</p>
                        <h3 className='subtitle_menu_left'>20 - Mignon - <strong className='price_color'>R$ 46,00</strong></h3>
                        <p className='description_menu_left'>Pão especial tostado, tiras de mignon, queijo cheddar, pico de galo (vinagrete de cebola e tomate) e maionese da casa</p>
                        <h3 className='subtitle_menu_left'>21 - Vegetariano - <strong className='price_color'>R$ 44,00</strong></h3>
                        <p className='description_menu_left'>Pão especial tostado, hamburguer de soja, queijo cheddar, ovo frito, barbecue, alface, rodelas de tomate, pepino agridoce e maionese da casa</p>
                        <br/>
                        <img className='mark_down' src='https://cdn.discordapp.com/attachments/1108351859443384430/1128696588894736434/Selo_Maionese.jpg'></img>
                        </div>
                    </div>
                </div>
        </div>
    );
}
 
export default HamburguerMenu;