import React, { useState } from 'react';
import styles from './reactemail.module.css';
// import PropTypes from 'prop-types';


export default function ReactEmail() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
  return (
    <div className={ styles.content_form }>
      <h1 className="title">Contato</h1>
      <form className="form" onSubmit={() => {}}>
        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input 
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <textarea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <input className="button" type="submit" value="Enviar" />
      </form>
    </div>
  )
}