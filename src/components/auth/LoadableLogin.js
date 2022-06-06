import React from 'react'
import Loadable from '@loadable/component'
import ComponentLoader from '../../loader/ComponentLoader.js'

const Loader = Loadable(() => import('./Login'),
  { fallback: <ComponentLoader/> }
)

export default Loader
