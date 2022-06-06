import { createSelector } from 'redux-bundler'

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
      if (failed && hash !== '/welcome' && !hash.startsWith('/settings') && !hash.startsWith('/login')) {
        return { actionCreator: 'doUpdateHash', args: ['#/welcome'] }
      }
    }
  )
}
export default redirectsBundle
