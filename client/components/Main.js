import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'
import {Navbar} from '../components'
import {Container} from './styled'
import theme from '../theme'

const Main = (props) => {
  const {children, handleClick, isLoggedIn} = props

  return (
    <Container style={{backgroundColor: theme.content, minHeight: '100vh'}}>
      {children}
    </Container>
  )
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Main))

Main.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
