import React, { useState, useContext } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'redux-bundler-react'
import { withTranslation } from 'react-i18next'
import withTour from '../components/tour/withTour'
import Box from '../components/box/Box'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from './base'
import { AuthContext } from '../login/AuthProvider'

const LoginPage = ({ t }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
  const clickLogOut = () => {
    if (currentUser) {
      signOut(auth)
    } else {
      console.log('no user connected')
    }
  }

  return (
    <div data-id='LoginPage' className='mw9 center'>
      <Helmet>
        <title>{t('title')} | IPFS</title>
      </Helmet>
      <Box className='mb3 pa4-l pa2'>
        <div className='lh-copy charcoal'>
          <form className="loginForm" onSubmit={handleSubmit}>
            <input
              placeholder="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button>Login</button>
          </form>
          <button onClick={clickLogOut}>Log Out</button>
        </div>
      </Box>
    </div>
  )
}

export default connect(
  withTour(withTranslation('login')(LoginPage))
)
