import React, { useState } from 'react';
import styles from './reactemail.module.css';
import emailjs from '@emailjs/browser';


export default function ReactEmail() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault();

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    if ( name === '', email === '', message === ''){
      alert('Preencha todos os campos');
      return;
    }

    if (!email.match(emailRegex)) {
      alert('Digite um e-mail válido');
      return;
    }

    emailjs.send("service_qvpenzq", "template_blfl936", templateParams,"WSfXpb0OvmGtOmgVQ")
    .then((response) => {
      console.log("EMAIL ENVIADO: ", response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')
    }, (err) => {
      console.log("ERRO: ", err)
    });

  }

  return (
    <div className={ styles.content_form }>
      <h1 className="title">Contato</h1>
      <form className="form" onSubmit={ sendEmail }>
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