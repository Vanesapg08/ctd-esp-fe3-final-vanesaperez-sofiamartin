import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length > 5 && email.includes('@') && email.includes('.')) {
      setError(false);
      setSuccess(true);
    } else {
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <div className="contact-form-container">
      <div className='messages-container'>
        {error && <div className="error-message">Por favor verifique su información nuevamente</div>}
        {success && <div className="success-message">Gracias {name}, te contactaremos cuando antes vía mail</div>}
      </div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Nombre completo" 
        />
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
        />
        <button>Enviar</button>

        
      </form>
    </div>
  );
}

export default Form;
