import * as types from './action-types'
import * as api   from '../utils/api'
import Keychain   from 'react-native-keychain'

export function loginSuccess(sessionData) {
  return {
    type: types.LOGIN_SUCCESS,
    session: sessionData
  }
}

export function loginError(error) {
  return { error, type: types.LOGIN_ERROR}
}

export function logout() {
  const sessionData = {
    accessToken : null,
    client      : null,
    expiry      : null,
    tokenType   : null,
    uid         : null,
  }
  return {
    type: types.LOGOUT,
    session: sessionData
  }
}

export function login(username, password) {
  const params = { email: username, password: password }

  return dispatch =>
  fetch(api.login, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    if (response.status == 200) {
      Keychain
      .setGenericPassword(username, password)
      const payload = response.headers.map
      const sessionData = {
        accessToken : payload['access-token'][0],
        client      : payload['client'][0],
        expiry      : payload['expiry'][0],
        tokenType   : payload['token-type'][0],
        uid         : payload['uid'][0],
      }
      dispatch(loginSuccess(sessionData))
    } else {
      const error = new Error(response.statusText)
      error.response = response
      dispatch(loginError(error))
      throw error
    }
  })
  .catch(error => { console.log('request failed', error) })
}
