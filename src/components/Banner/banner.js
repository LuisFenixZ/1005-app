import './banner.css'
import React from 'react'
export const Banner = () => {
    return(
        <header className="main__header">
            <div class="main__header-inner-wrap clearfix"/>
                <div class='main__banner' />
                <div class='logo'/>
                    <a class="logo_text" href="https://www.1005burger.com.br/inicio" rel="home">
                        <img class="logo-img" src='https://www.1005burger.com.br/wp-content/themes/burger1005/img/logo-1005foods.png'></img>
                    </a>
                  
              
                <div class='right__banner'/>
            
        </header>
    )
}

export default Banner;
