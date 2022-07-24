import { createSelector } from 'redux-bundler'
// firebase
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
      const user = auth.currentUser
      console.log(user)
      if ((failed && hash !== '/welcome' && !hash.startsWith('/settings') && !hash.startsWith('/login'))) {
        return { actionCreator: 'doUpdateHash', args: ['#/welcome'] }
      }
      if (user) {
        if ((user.displayName == null && !failed)) {
          console.log(user)
          return { actionCreator: 'doUpdateHash', args: ['#/login'] }
        }
      }
    }
  )
}
export default redirectsBundle
