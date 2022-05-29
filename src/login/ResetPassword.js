import React from 'react'
import { Helmet } from 'react-helmet'
import { withTranslation } from 'react-i18next'
import Title from './Title'
import Box from '../components/box/Box'
import ResetToggle from '../components/ResetPass/ResetToggle'

export const ResetPassword = ({ t }) => (
  <div data-id='PasswordReset' className='mw9 center'>
    <Helmet>
      <title>{t('title')} | IPFS</title>
    </Helmet>

    <Box>
      <Title>{t('reset')}</Title>
      <ResetToggle t={t} open />
    </Box>
  </div>
)

export default withTranslation('login')(ResetPassword)
