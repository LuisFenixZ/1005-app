import './password.css';
import '../../Pages/Form_login/form_login.css';
import React, { useState } from 'react';
import { Eye, EyeOff } from 'react-feather';


const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (event) => {
    event.preventDefault(); 
    setShowPassword(!showPassword);
  };

  return (
    <div>
      
        <label className='password-label' htmlFor="password2" >Senha: </label>
      <input className='password-input '
        obrigatorio={true}
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Digite sua senha'
      />
      <button className="password-input-icon" onClick={togglePasswordVisibility}>
        {showPassword ?  <Eye /> : <EyeOff />}
      </button>
    </div>
  );
};

export default PasswordInput;