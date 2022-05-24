import React from 'react'
import { connect } from 'redux-bundler-react'

import Userfront from '@userfront/react'

const PasswordResetForm = Userfront.build({
  toolId: 'dkbmmo'
})

const ResetToggle = ({ t }) => {
  return (
    <div>
      {t('ResetToggle.label')}
      <PasswordResetForm />
    </div>
  )
}

export default connect(ResetToggle)
