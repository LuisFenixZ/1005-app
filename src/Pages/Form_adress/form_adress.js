import './Form_adress.css'
import New_adress from '../../components/Form/form'
import React, { useState } from 'react'

const Form_adress = () => {
    const handleButtonClick = () => {
        window.location.href = 'https://www.1005burger.com.br/minha-conta/';
      };
      const [password, setPassword] = useState('');

      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };

    return (
        <section className="form_adress_text">
                <form className='adress'>
                    <h1 className='adress_text'>Endereço</h1>
                    <h1 className='adress_line_up'>_______________</h1>
                    <New_adress label="Nome Endereço:" placeholder="Digite o nome do seu endereço" />
                    <New_adress label="Cidade:" placeholder="Digite sua cidade" />
                    <New_adress label="Bairro:" placeholder="Digite seu bairro" />
                    <New_adress label="Complemento:" placeholder="complemento" />
                    <New_adress label="Rua:" placeholder="Digite sua rua" />
                    <New_adress label="Numero:" placeholder="Digite sua rua" />
                    <a href='https://www.1005burger.com.br/minha-conta/' className='forgot_password'>Esqueceu sua senha?</a>
                    <h1 className='adress_line_down'>_______________</h1>

                    <button onClick={handleButtonClick} className='button-enter'>
                        Entrar
                    </button>

                </form>
        </section>
    )
}

export default Form_adress