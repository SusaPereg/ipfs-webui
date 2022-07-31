import { createSelector } from 'redux-bundler'
import { auth } from '../login/base'

const redirectsBundle = {
  name: 'redirects',

  reactToEmptyHash: createSelector(
    'selectHash',
    (hash) => {
      if (hash === '') {
        return { actionCreator: 'doUpdateHash', args: ['#/'] }
      }
    }
  ),

  reactToIpfsConnectionFail: createSelector(
    'selectIpfsInitFailed',
    'selectHash',
    (failed, hash) => {
      const currentUser = auth.currentUser
      if (!failed && hash.startsWith('/files') && !currentUser) {
        return { actionCreator: 'doUpdateHash', args: ['#/login'] }
      }
      if (failed && hash !== '/welcome' && !hash.startsWith('/settings') && !hash.startsWith('/login')) {
        return { actionCreator: 'doUpdateHash', args: ['#/welcome'] }
      }
    }
  )
}
export default redirectsBundle
