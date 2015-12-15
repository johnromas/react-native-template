'use strict'

import React, { Component, View, Text } from 'react-native'
import {bindActionCreators} from 'redux'
import Login                from '../components/login'
import Keychain             from 'react-native-keychain'
import * as SessionActions  from '../actions/session-actions'
import { connect }          from 'react-redux/native'

class AuthWrap extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    Keychain.
      getGenericPassword()
      .then(function(credentials) {
        this.autoLogin(credentials.username, credentials.password)
      }.bind(this)).catch((error) => {
        Keychain.resetGenericPassword()
      })
  }

  autoLogin(username, password) {
    SessionActions.login(username, password)
  }

  render() {
    const { state, dispatch } = this.props

    return (
      <Login
        session={state.session}
        {...bindActionCreators(SessionActions, dispatch)} />
    )
  }
}

export default connect(state => ({
  state: state.session
}))(AuthWrap)

// get session state
// if session state, redirect to post index page
// if no session state, render login screen
