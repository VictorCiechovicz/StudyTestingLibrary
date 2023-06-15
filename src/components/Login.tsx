'use client'

import React, { useState, CSSProperties } from 'react'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log(`Usuário: ${username}, Senha: ${password}`)
  }

  const styles: { [key: string]: CSSProperties } = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
     
    },
    label: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    input: {
      width: 200,
      height: 40  ,
      textAlign: 'start',
      margin: '10px 0',
      padding: 5
    },
    button: {
      width: 200,
      height: 50,
      borderRadius: 10,
      backgroundColor: '#5bcccb',
      marginTop:10
    }
  }
  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label style={styles.label}>
        Usuário
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          data-testid="username-input"
          style={styles.input}
        />
      </label>
      <label style={styles.label}>
        Senha
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          data-testid="password-input"
          style={styles.input}
        />
      </label>
      <button style={styles.button} type="submit" data-testid="submit-button">
        Login
      </button>
    </form>
  )
}

export default Login
