import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'
import {Navbar} from '../components'
import {Container} from './styled'
import theme from '../theme'

export default function Main(props){
  const {children} = props

  return (
    <Container>
      {children}
    </Container>
  )
}