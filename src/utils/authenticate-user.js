import Keychain       from 'react-native-keychain'

export const AuthenticateUser = {
  fetch: function(username, password) {
    const params = { email: username, password: password }
    return fetch('http://localhost:3000/auth/sign_in', {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
    }).then((response) => {
      if (response.status == 200) {
        Keychain
        .setGenericPassword(username, password)
      }
      return response.headers.map
    }).then((json) => {
      return json;
    })
  }
};
