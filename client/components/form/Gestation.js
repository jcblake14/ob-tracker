import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {updateField} from '../../store'
import {Container, Fieldset} from '../styled'
import {form} from '../../utils'

// Material UI imports
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const Gestation = (props) => {
  const {children,
    handleSelect,
    gestation,
    weeks,
    days,
    warn, validations
  } = props

  return (
    <Fieldset>
      <h4>Gestation</h4>
      <Container>

      <SelectField value={gestation}
        floatingLabelText="Number"
        errorText={warn && !validations.gestation && 'Please enter a valid gestation number'}
        onChange={(e, data) => handleSelect(e, data, 'gestation')}>
        {form.gestations.map((gestation, i) => {return <MenuItem key={i} value={gestation} primaryText={gestation} />})}
      </SelectField> 

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
    gestation: state.delivery.gestation,
    weeks: state.delivery.weeks,
    days: state.delivery.days,
    warn: state.form.warn
  }
}

const mapDispatch = (dispatch) => {
  
  function handleChange(type, data){
    if (type === 'gestation') data = form.gestations[data];
    if (type === 'type') data = form.types[data];
    if (type === 'induction_reason') data = form.inductions[data];
    if (type === 'indication') data = form.indications[data];
    dispatch(updateField(type, data));
  }

  return {
    handleSelect(e, data, type){
      handleChange(type, data)
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Gestation))