import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Slider} from '../components'
import {Container, SideTitle} from './styled'

function Sliders(props){
  const {filters, handleChange} = props;
  return (
    <Container style={{padding: '0px 32px'}}>
      <SideTitle lower>Filters</SideTitle>
      {filters && 
        <Container>
          <Slider name={'patient_age'} title={'Age'}/>
          <Slider name={'gestational_age'} title={'Gestational Age (weeks)'}/>
          <Slider name={'bmi'} title={'BMI'}/>
        </Container>
      }
    </Container>
  )
}

const mapState = (state) => {
  return {
    filters: state.filters,
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleChange(e, filter){
      dispatch(setValues(filter, e))
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Sliders))