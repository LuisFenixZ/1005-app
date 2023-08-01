import './footer.css';
import {BsFacebook,BsWhatsapp,BsInstagram} from 'react-icons/bs';

const Footer = () => {
    return (
      <footer>
        <div className='footer'>
            <hr className='footer-line'/>
            <section className='grid-footer'>
            <img className='footer-img ' src='https://www.1005burger.com.br/wp-content/themes/burger1005/img/logo-1005foods.png' alt='Logo'/>
            <p className='footer-telephone'>TELEFONE</p>
            <p className='telephone-line'/>
            <p className='telephone-number'>(42) 98835-4685</p>
            <p className='footer-address'>ENDEREÇO</p>
            <p className='address-line'/>
            <p className='address-local'>Av Getulio Vargas, 737 <br/> - Centro - Porto União (SC)</p>
            <p className='footer-service'>ATENDIMENTO</p>
            <p className='service-line'/>
            <p className='service-hour'>Dias de semana das 18h às 23h45 <br/> e finais de semana das 11h às 23h45</p>
            </section>
            <a class="logo_facebook" href="https://pt-br.facebook.com/1005Foods/" rel="Facebook"><BsFacebook/></a>
            <a class="logo_insta" href='https://www.instagram.com/1005foods/' rel="Instagram"><BsInstagram/></a>
            <a class="logo_whats" href='http://wa.me/554288354685' rel="WhatsApp"><BsWhatsapp/></a>
            <img className="cartao" src='https://www.1005burger.com.br/wp-content/themes/burger1005/img/pagseguro_footer.png'/>
        </div>
    </footer>

    );
}
  
  export default Footer;