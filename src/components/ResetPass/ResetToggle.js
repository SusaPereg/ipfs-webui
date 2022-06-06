import React from 'react'
import { connect } from 'redux-bundler-react'

import Userfront from '@userfront/react'

const PasswordResetForm = Userfront.build({
  toolId: 'rkaoka'
})

const ResetToggle = () => {
  return (
    <div>
      <PasswordResetForm />
    </div>
  )
}

export default connect(ResetToggle)
