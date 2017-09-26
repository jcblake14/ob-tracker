import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {auth} from '../store'
import {Container, AuthLink, AuthInput} from './styled'
import theme from '../theme'

// Material UI imports
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const button = {
  backgroundColor: theme.color5a,
  color: 'white',
  fontFamily: 'Montserrat',
  fontWeight: 'bold',  
  width: '200px'
}

const AuthForm = (props) => {
  const {name, displayName, handleSubmit, handleChange, error} = props

  return (
    <Container center>
    <form onSubmit={handleSubmit}>
      <Container center>
        <AuthInput border name="email" placeholder="Email" onChange={handleChange}></AuthInput>
        <AuthInput border name="password" placeholder="Password" onChange={handleChange} type="password"></AuthInput>
        <FlatButton type="submit" style={button}></FlatButton>
        <p>- OR -</p>
        <a href="/auth/google"><img src="/btn_google_signin_light_normal_web.png"/></a>
        <AuthLink to="/signup">New to Ob Tracker? Click here to sign up.</AuthLink>
      </Container>      
    </form>
    </Container>
  )
}

const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleChange(e){
      console.log(e.target.value)
    },
    handleSubmit(evt){
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      console.log(formName, email, password)
      // dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
