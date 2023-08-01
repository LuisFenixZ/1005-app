/*A LOGO ESTARA AQUI*/ 

import './form.css'


const New_login = (props) => {

    const placeholderModificada = `${props.placeholder}` 

    return (
        <div className="text_form">
            <label>
                {props.label}
            </label>
            <input required={props.obrigatorio} placeholder={placeholderModificada}/>
            
        </div>
    )
}

export default New_login
