import './form_register.css'
import New_register from '../../components/Form/form'

const Form_register = () => {
    return (
        <section className="form_register_text">
                <form className='register'>
                    <h1 className='register_texto'>CADASTRO</h1>
                    <New_register label="Nome:" placeholder="Digite seu nome" />
                    <New_register label="Email:" placeholder="Digite seu email" />
                    <New_register label="Telefone:" placeholder="Digite seu telefone" />
                    <New_register label="Senha:" placeholder="Digite sua senha" />
                    <New_register label="Confirmação Senha:" placeholder="Comfime sua senha"/>
                </form>
    
        </section>

                           
                      
    )
    
 
}

export default Form_register