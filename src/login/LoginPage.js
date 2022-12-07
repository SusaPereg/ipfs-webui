import React, { useState, useContext } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'redux-bundler-react'
import { withTranslation } from 'react-i18next'
import withTour from '../components/tour/withTour'
// import Box from '../components/box/Box'
import { sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from './base'
import './LoginPage.css'
import { AuthContext } from '../login/AuthProvider'
import logo from './src/logo_UCA.png'
import sealogo from './src/logo_seaeu4.png'
import Box from '../components/box/Box'
import Title from './Title'
// import { NavLink } from '../navigation/NavBar'

const LoginPage = ({ t }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [errormail, setErrorMail] = useState('')
  const [success, setSuccess] = useState('')
  const [shown, setShown] = React.useState(false)
  const currentUser = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    function onLog () {
      signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        setError(null)
        setSuccess('Inicio de sesión realizado con éxito')
        setTimeout(() => {
          setSuccess(null)
        }, 1500)
        console.log('Successful login')
      })
        .catch((error) => {
          const errorCode = error.code.toString()
          console.log(errorCode)
          if (errorCode !== ' ') {
            setSuccess(null)
            setError('Email o contraseña incorrecto')
            setTimeout(() => {
              setError(null)
            }, 1500)
          }
        })
    }
    onLog()
  }
  const handleSubmitReset = (p) => {
    p.preventDefault()
    function onReset () {
      console.log(email)
      if (errormail != null) {
        setErrorMail(null)
      }
      sendPasswordResetEmail(auth, email).catch((error) => {
        console.log(error)
        setErrorMail('Email no registrado')
        setTimeout(() => {
          setErrorMail(null)
        }, 1500)
      })
    }
    onReset()
  }

  const clickLogOut = () => {
    if (currentUser.currentUser !== null) {
      signOut(auth)
    }
  }

  const switchShown = () => setShown(!shown)

  return (
    <div data-id='LoginPage'>
      <Helmet>
        <title>{t('title')} | IPFS</title>
      </Helmet>
      <div id="imagenes">
        <img src={logo} className="logo" alt="UCA" width="300px"/> <img src={sealogo} className="logo" alt="SEA EU" width="170px"/>
      </div>
      <form className="LoginPage" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label htmlFor="password">Contraseña</label>
          <span class="input-group-btn">
            <input
              placeholder="Contraseña"
              type={shown ? 'text' : 'password'}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button type="button" className="primary show" onClick={switchShown}>{shown ? 'Ocultar' : 'Mostrar'}</button>
          </span>
          <div id="botones_log">
            { currentUser.currentUser === null && <button className="primary login">Acceder</button>}  { currentUser.currentUser !== null && <button type = 'button' className="primary" onClick={clickLogOut}> Salir</button>}
          </div>
        </div>
        {error && <div id="error"> {error} </div>}
        {success && <div id="success">{success}</div>}
      </form>
      <Box>
        <Title>{t('¿Has olvidado tu contraseña?')}</Title>
        <form className="LoginPage" onSubmit={handleSubmitReset}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Email"
              type="email"
              onChange={(p) => setEmail(p.target.value)}
            ></input>
            <button className="second">Cambiar contraseña</button>
          </div>
          {errormail && <div id="error"> {errormail} </div>}
        </form>
      </Box>
    </div>
  )
}

export default connect(
  withTour(withTranslation('login')(LoginPage))
)
