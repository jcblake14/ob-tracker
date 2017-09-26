import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {setDate, clearDate} from '../store'
import {Container} from './styled'
import history from '../history'
import {FilterDate, Sliders} from '../components'

// Material UI Imports 
import {Card} from 'material-ui/Card';

const cardStyle = {
  margin: '20px'
}

export default function Filters(){
  return (
    <Card style={cardStyle}>
      <Sliders />
      <FilterDate />
    </Card>
  )
}
