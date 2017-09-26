import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {setDate, clearDate} from '../store'
import {Container, Side, Bar, SideTitle} from './styled'
import history from '../history'
import {FilterDate, Sliders} from '../components'

export default function Sidebar(){
  return (
    <Side>
      <Bar justify={'center'}>
        <SideTitle header>Ob Tracker</SideTitle>
      </Bar>
      <Sliders />
      <FilterDate />
    </Side>
  )
}
