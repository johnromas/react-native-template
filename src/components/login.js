'use strict'

import React, {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
} from 'react-native'

import Dimensions from 'Dimensions'

const windowSize = Dimensions.get('window')

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  handleLogin() {
    const { username, password } = this.state
    this.props.login(username, password)
  }

  render() {
    const { login } = this.props
    return (
      <View style={styles.container}>
        <Image style={styles.bg} />
        <View style={styles.header}>
          <Text style={styles.loginHeader}>
            templateApp
          </Text>
        </View>
        <View style={styles.inputs}>
          <View style={styles.inputContainer}>
            <Image style={styles.inputUsername} />
            <TextInput 
              style={[styles.input, styles.whiteFont]}
              placeholder="Username"
              autoCapitalize='none'
              placeholderTextColor="#FFF"
              onChangeText={(text) => this.setState({username: text})}
              value={this.state.username}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image style={styles.inputPassword} />
            <TextInput
              password={true}
              style={[styles.input, styles.whiteFont]}
              autoCapitalize='none'
              placeholder="Pasword"
              placeholderTextColor="#FFF"
              onChangeText={(text) => this.setState({password: text})}
              value={this.state.password}
            />
          </View>
          <View style={styles.forgotContainer}>
            <Text style={styles.greyFont}>Forgot Password</Text>
          </View>
        </View>
        <TouchableHighlight onPress={this.handleLogin.bind(this)}>
          <View style={styles.signin}>
            <Text style={styles.tealFont}>Sign In</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.signup}>
          <Text style={styles.greyFont}>Don't have an account?<Text style={styles.whiteFont}>  Sign Up</Text></Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'transparent'
  },
  bg: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'teal',
    width: windowSize.width,
    height: windowSize.height
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: .5,
    backgroundColor: 'transparent'
  },
  loginHeader: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
  mark: {
    width: 150,
    height: 150
  },
  signin: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center'
  },
  signup: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: .15
  },
  inputs: {
    marginTop: 10,
    marginBottom: 10,
    flex: .25
  },
  inputPassword: {
    marginLeft: 15,
    width: 20,
    height: 21
  },
  inputUsername: {
    marginLeft: 15,
    width: 20,
    height: 20
  },
  inputContainer: {
    padding: 10,
    borderWidth: 1,
    borderBottomColor: '#CCC',
    borderColor: 'transparent'
  },
  input: {
    position: 'absolute',
    left: 61,
    top: 12,
    right: 0,
    height: 20,
    fontSize: 14
  },
  forgotContainer: {
    alignItems: 'flex-end',
    padding: 15,
  },
  greyFont: {
    color: '#D8D8D8'
  },
  tealFont: {
    color: 'teal'
  },
  whiteFont: {
    color: '#FFF'
  }
})
