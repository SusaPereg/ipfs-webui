import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'redux-bundler-react'
import { withTranslation } from 'react-i18next'
import withTour from '../components/tour/withTour'
import Userfront from '@userfront/react'

const LoginForm = Userfront.build({
  toolId: 'alnkkd'
})

const LoginPage = ({ t, tReady, isIpfsConnected, ipfsPendingFirstConnection }) => (
  <div data-id='LoginPage' className='mw9 center'>
    <Helmet>
      <title>{t('title')} | IPFS</title>
    </Helmet>
    { ipfsPendingFirstConnection || isIpfsConnected
      ? <LoginForm/>
      : <LoginForm/> }
  </div>
)

export default connect(
  'selectIpfsConnected',
  'selectIpfsPendingFirstConnection',
  withTour(withTranslation('login')(LoginPage))
)

// <div data-id='LoginPage' className='mw9 center'>
// <Helmet>
//  <title>{t('title')} | IPFS</title>
//  console.log("entro");
// </Helmet>
// <div className='lh-copy charcoal'>
//  <LoginForm/>
// </div>
// </div>
