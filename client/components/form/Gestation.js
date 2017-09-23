import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {updateField} from '../../store'
import {Container, Fieldset} from '../styled'
import {form} from '../../utils'

// Material UI imports
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

const Gestation = (props) => {
  const {children,
    handleSelect,
    weeks,
    days,
    warn, validations
  } = props

  return (
    <Fieldset>
      <h4>Gestational Age</h4>
      <Container>
      
      <TextField value={weeks}
        hintText="Weeks"  
        floatingLabelText="Weeks"
        // floatingLabelFixed={true}
        errorText={warn && !validations.weeks && 'Please enter a valid number'}
        onChange={(e, data) => handleSelect(e, data, 'weeks')}
      />

      <TextField value={days}
        hintText="Days"
        floatingLabelText="Days"
        // floatingLabelFixed={true}
        errorText={warn && !validations.days && 'Please enter a valid number. If 0, enter \'0\'.'}
        onChange={(e, data) => handleSelect(e, data, 'days')}
      />

      </Container>
    </Fieldset>
  )
}

const mapState = (state) => {
  return {
    weeks: state.delivery.weeks,
    days: state.delivery.days,
    warn: state.form.warn
  }
}

const mapDispatch = (dispatch) => {
  
  function handleChange(type, data){
    if (type === 'type') data = form.types[data];
    if (type === 'induction_reason') data = form.inductions[data]
    if (type === 'indication') data = form.indications[data]
    dispatch(updateField(type, data));
  }

  return {
    handleSelect(e, data, type){
      handleChange(type, data)
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Gestation))