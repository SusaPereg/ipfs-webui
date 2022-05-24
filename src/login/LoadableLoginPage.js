import React from 'react'
import Loadable from '@loadable/component'
import ComponentLoader from '../loader/ComponentLoader.js'

const Loader = Loadable(() => import('./LoginPage'),
  { fallback: <ComponentLoader/> }
)

export default Loader
