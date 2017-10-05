import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {setValues} from '../store'
import {Container, Label} from './styled'

// React-Input-Range imports
import InputRange from 'react-input-range';
import style from 'react-input-range/lib/css/index.css'

function Slider(props){
  const {filters, name, title, handleChange} = props;
  return (
    <Container style={{margin: '16px 0px'}}>
      <Label>{title}</Label>
      <InputRange
        formatLabel={value => name === 'gestational_age' ? Math.floor(value / 7) : value}
        minValue={filters[name].min || 0}
        maxValue={filters[name].max || 1}
        value={{
          min: filters[name].minValue || filters[name].min || 0,
          max: filters[name].maxValue || filters[name].max || 0
        }}
        onChange={(e) => handleChange(e, name)}
      />
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

export default withRouter(connect(mapState, mapDispatch)(Slider))