import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Slider} from '../components'
import {Container} from './styled'
import history from '../history'

import InputRange from 'react-input-range';

function Sliders(props){
  const {filters, handleChange} = props;
  return (
    <Container style={{padding: '0px 20px'}}>
      <h3 style={{textAlign: 'center'}}>Filters</h3>
      {filters && 
        <Container>
          <Slider name={'patient_age'}/>
          <Slider name={'gestational_age'}/>
          <Slider name={'bmi'}/>
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