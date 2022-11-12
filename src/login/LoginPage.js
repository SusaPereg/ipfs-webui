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
import logo from './src/UCA-Simbolo.png'
import sealogo from './src/logo_seaeu4.png'
import Box from '../components/box/Box'
import Title from './Title'
// import { NavLink } from '../navigation/NavBar'

const LoginPage = ({ t }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [shown, setShown] = React.useState(false)
  const currentUser = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    function onRegister () {
      signInWithEmailAndPassword(auth, email, password).catch((error) =>
        console.log(error)
      )
      console.log('Successful login')
    }
    onRegister()
  }
  const handleSubmitReset = (p) => {
    p.preventDefault()
    function onReset () {
      console.log(email)
      sendPasswordResetEmail(auth, email).catch((error) =>
        console.log(error)
      )
      console.log('Email sent')
    }
    onReset()
  }

  // const goToForgotPassword = () => {
  //   <NavLink to='/reset' >{t('reset:title')}</NavLink>
  //   console.log('ya')
  // }

  const clickLogOut = () => {
    if (currentUser) {
      signOut(auth)
    } else {
      console.log('No user connected')
    }
  }

  const switchShown = () => setShown(!shown)

  return (
    <div data-id='LoginPage'>
      <Helmet>
        <title>{t('title')} | IPFS</title>
      </Helmet>
      <div id="imagenes">
        <img src={logo} className="logo" alt="UCA" width="210px"/> <img src={sealogo} className="logo" alt="SEA EU" width="170px"/>
      </div>
      <form className="LoginPage" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label htmlFor="password">Password</label>
          <span class="input-group-btn">
            <input
              placeholder="Password"
              type={shown ? 'text' : 'password'}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button className="primary show" onClick={switchShown}>{shown ? 'Hide' : 'Show'}</button>
          </span>
          <div id="botones_log">
            <button className="primary login">Login</button>  <button className="primary" onClick={clickLogOut}> Log Out</button>
          </div>
        </div>
      </form>
      <Box>
        <Title>{t('Forgot password?')}</Title>
        <form className="LoginPage" onSubmit={handleSubmitReset}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Email"
              type="email"
              onChange={(p) => setEmail(p.target.value)}
            ></input>
            <button className="second">Reset password</button>
          </div>
        </form>
      </Box>
    </div>
  )
}

export default connect(
  withTour(withTranslation('login')(LoginPage))
)
