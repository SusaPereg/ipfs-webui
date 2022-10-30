import React from 'react'
import { Helmet } from 'react-helmet'
import { withTranslation } from 'react-i18next'
import Title from './Title'
import Box from '../components/box/Box'

export const ResetPassword = ({ t }) => (
  <div data-id='PasswordReset' className='mw9 center'>
    <Helmet>
      <title>{t('title')} | IPFS</title>
    </Helmet>

    <Box>
      <Title>{t('Reset Password')}</Title>

    </Box>
  </div>
)

export default withTranslation('reset')(ResetPassword)
