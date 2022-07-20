import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'redux-bundler-react'
import { withTranslation } from 'react-i18next'
import withTour from '../components/tour/withTour'
import Box from '../components/box/Box'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Redirect } from 'react-router-dom'
import { auth } from './base'

const LoginPage = ({ t }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    function onRegister () {
      signInWithEmailAndPassword(auth, email, password).catch((error) =>
        console.log(error)
      )
      return (<Redirect to={{ pathname: '/', state: { from: '' } }} />)
    }
    onRegister()
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
        </div>
      </Box>
    </div>
  )
}

export default connect(
  withTour(withTranslation('login')(LoginPage))
)

// import React from 'react'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import './Login.css'

// import LogUser from '../components/LogUser/LogUser.js'
// import PasswordReset from '../components/ResetPassword/ResetPassword'

// export default function App () {
//   return (
//     <div className="wrapper">
//       <BrowserRouter>
//         <Switch>
//           <Route path="/">
//             <LogUser />
//           </Route>
//           <Route path="/reset">
//             <PasswordReset />
//           </Route>
//         </Switch>
//       </BrowserRouter>
//     </div>
//   )
// }

// // export default function App () {
// //   return (
// //     <Router>
// //       <div>
// //         <nav>
// //           <ul>
// //             <li>
// //               <Link to="/">Home</Link>
// //             </li>
// //             <li>
// //               <Link to="/login2">Login</Link>
// //             </li>
// //             <li>
// //               <Link to="#/reset">Reset</Link>
// //             </li>
// //             <li>
// //               <Link to="#/dashboard">Dashboard</Link>
// //             </li>
// //           </ul>
// //         </nav>

// //         <Switch>
// //           <Route exact path="/login2">
// //             <Login />
// //           </Route>
// //           <Route exact path="#/reset">
// //             <PasswordReset />
// //           </Route>
// //           <Route exact path="#/dashboard">
// //             <Dashboard />
// //           </Route>
// //           <Route exact path="/">
// //             <Home />
// //           </Route>
// //         </Switch>
// //       </div>
// //     </Router>
// //   )
// // }

// // function Home () {
// //   return (
// //     <div>
// //       <h2>Home</h2>
// //       <SignupForm />
// //     </div>
// //   )
// // }
// // function PasswordReset () {
// //   return (
// //     <div>
// //       <h2>Password Reset</h2>
// //       <PasswordResetForm />
// //     </div>
// //   )
// // }

// // function Dashboard () {
// //   return <h2>Dashboard</h2>
// // }
