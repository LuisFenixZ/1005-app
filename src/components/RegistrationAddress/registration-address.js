import './registration-address.css';
import New_login from '../../components/Form/form';
import React from 'react';

const Address = () =>{
    const handleButtonClick = () => {
        window.location.href = 'https://www.1005burger.com.br/minha-conta/';
      };
    return (
        <section className="form_address">
                <form className='address'>
                    <h1 className='address_text'>Cadastro-Endereço</h1>
                    <New_login className='name' label="Nome endereço:" placeholder="Digite seu local" />
                    <New_login className='city' label="Cidade:" placeholder="Digite sua cidade" />
                    <New_login className='namneighborhoode' label="Bairro:" placeholder="Digite seu bairro" />
                    <New_login className='complement ' label="Complemento:" placeholder="Digite o complemento" />
                    <New_login className='road' label="Rua:" placeholder="Digite sua rua"/>
                    <New_login className='number' label="Numero:" placeholder="Digite seu numero"/>
                    <button onClick={handleButtonClick} className='button-enter-address'>
                        Cadastrar
                    </button>
                    <button onClick={handleButtonClick} className='button-voltar-address'>
                        Voltar
                    </button>
                </form>
        </section>                
    );

}



export default Address;