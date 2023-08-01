import './form_login.css'
import New_login from '../../components/Form/form'
import React, { useState } from 'react'
import Button from '../../components/Button/button'
import Registerbutton from '../../components/Button/button2'
import PasswordInput  from '../../components/Password/password'

const Form_login = () => {

      const [password2, setPassword2] = useState('');



      const handlePassword2Change = (event) => {
        setPassword2(event.target.value);
      };





    return (
        <section className="form_login_text">
                 <form className='login'>
                    <h1 className='login_text'>LOGIN</h1>
                    <h1 className='login_line_up'>_____________</h1>
                    <New_login obrigatorio={true} label="Nome:" placeholder="Digite seu nome" />
                    <PasswordInput/>
                    <a href='https://www.1005burger.com.br/minha-conta/' className='forgot_password'>Esqueceu sua senha?</a>
                    <h1 className='login_line_down'>_____________</h1>
                    <Button text="Login"/>

                </form>
                <form className="register">
                <h1 className='register_text'>CADASTRO</h1>
                <h1 className='register_line_up'>_____________</h1>
                <New_login obrigatorio={true} label="E-mail:" placeholder="Digite seu e-mail" />
                <PasswordInput/>
                <h1 className='register_line_down'>_____________</h1>
                <Button text="Registrar"/>

                  { /* <h1 className='teste2'>fdyhdtr</h1>
                </form>
                <form>
                <h1 className='teste'>fdyhdtr</h1>
                  */}
                </form>
                <form className="register_small">
                <h1 className='register_text_small'>CADASTRO</h1>
                <h1 className='register_line_up_small'>_____________</h1>
                <New_login label="E-mail:" placeholder="Digite seu e-mail" />
                <PasswordInput/>
                <h1 className='register_line_down_small'>_____________</h1>
                <Registerbutton text="Registrar"/>
                  { /* <h1 className='teste2'>fdyhdtr</h1>
                </form>
                <form>
                <h1 className='teste'>fdyhdtr</h1>
                  */}
                </form>

        </section>
    )
}
export default Form_login