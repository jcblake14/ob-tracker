import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {updateField} from '../../store'
import {Container, Fieldset} from '../styled'
import {form} from '../../utils'

// Material UI Imports
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

const Information = (props) => {
  const {
    handleSelect,
    patient_age,
    gravidity,
    parity,
    bmi,
    warn, validations
  } = props

  return (
    <Fieldset>
      <h4>Information</h4>
      <Container>

        <TextField value={patient_age}
          hintText="Patient age"
          floatingLabelText="Patient age"
          // floatingLabelFixed={true}
          errorText={warn && !validations.patient_age && 'Please enter a valid age'}
          onChange={(e, data) => handleSelect(e, data, 'patient_age')}
        />

        <TextField value={gravidity}
          hintText="Gravidity"
          floatingLabelText="Gravidity"
          // floatingLabelFixed={true}
          errorText={warn && !validations.gravidity && 'Please enter a valid gravidity'}
          onChange={(e, data) => handleSelect(e, data, 'gravidity')}
        />

        <TextField value={parity}
          hintText="Parity" 
          floatingLabelText="Parity"
          // floatingLabelFixed={true}
          errorText={warn && !validations.parity && 'Please enter a valid parity'}
          onChange={(e, data) => handleSelect(e, data, 'parity')}
        />

        <TextField value={bmi}
          hintText="BMI"
          floatingLabelText="BMI"
          // floatingLabelFixed={true}
          errorText={warn && !validations.bmi && 'Please enter a valid BMI'}
          onChange={(e, data) => handleSelect(e, data, 'bmi')}
        />

      </Container>
    </Fieldset>
  )
}

const mapState = (state) => {
  return {
    patient_age: state.delivery.patient_age,
    gravidity: state.delivery.gravidity,
    parity: state.delivery.parity,
    bmi: state.delivery.bmi,
    warn: state.form.warn
  }
}

const mapDispatch = (dispatch) => {
  function handleChange(type, data){
    dispatch(updateField(type, data));
  }

  return {
    handleDate(e, date){
      handleChange('date', date)
    },
    handleSelect(e, data, type){
      handleChange(type, data)
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Information))