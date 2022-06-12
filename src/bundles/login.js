import { createSelector } from 'redux-bundler'
import * as Enum from './enum'
/**
 *
 *@typedef {Object} LoginInvalid
 * @property {'IPFS_LOGIN_INVALID'} type
 *
 * @typedef {Object} TokenInvalid
 * @property {'IPFS_LOGIN_TOKEN_INVALID'} type
 *
 * @typedef {Object} LoginSuccess
 * @property {'IPFS_LOGIN_SUCCEED'} type
 *
 * @typedef {Object} TokenSuccess
 * @property {'IPFS_TOKEN_SUCCEED'} type
 */

export const ACTIONS = Enum.from([
  'IPFS_LOGIN_INVALID',
  'IPFS_LOGIN_TOKEN_INVALID',
  'IPFS_LOGIN_SUCCEED',
  'IPFS_TOKEN_SUCCEED'
])
const selectors = {
  /**
     * @param {State} state
     */
  selectLoginInvalid: state => state.login.invalid,
  /**
   * @param {State} state
   */
  selectLoginTokenInvalid: state => state.login.TokenInvalid,
  /**
    * @param {State} state
    */
  selectLoginValid: state => state.login.valid,
  /**
   * @param {State} state
   */
  selectLoginTokenValid: state => state.login.TokenValid
}

const actions = {
  /**
   * @returns {function(Context):Promise<void>}
   */
  doStopIpfs: () => async (context) => {
    if (ipfs) {
      await ipfs.stop()
      context.dispatch({ type: 'IPFS_STOPPED' })
    }
  },
}
