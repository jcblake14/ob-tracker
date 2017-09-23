import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {updateField} from '../../store'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {Container, Fieldset} from '../styled'
import {form} from '../../utils'

const Delivery = (props) => {
  const {children,
    handleSelect,
    type,
    induced,
    indication,
    induction_reason,
    warn, validations
  } = props

  const RadioButtons = (props) => (
    <div>
      <RadioButtonGroup
        name="C-Section"
        valueSelected={props.induced}
        onChange={(e) => handleSelect(e, e.target.value, props.type)}>
        <RadioButton
          value="Yes"
          label="Yes"
        />
        <RadioButton
          value="No"
          label="No"
        />
      </RadioButtonGroup>
    </div>
  );

  return (
    <Fieldset>
      <h4>Delivery</h4>
      <Container>
        <SelectField floatingLabelText="Delivery Type" value={type}
          errorText={warn && !validations.type && 'Please enter a valid delivery type'}
          onChange={(e, data) => handleSelect(e, data, 'type')}>
          {form.types.map((type, i) => {return <MenuItem key={i} value={type} primaryText={type} />})}
        </SelectField>        

        {type === "C-section" ? 
          <SelectField floatingLabelText="Indication" value={indication}
            errorText={warn && !validations.indication && 'Please enter a valid indication'}                
            onChange={(e, data) => handleSelect(e, data, 'indication')}>
            {form.indications.map((indication, i) => {return <MenuItem key={i} value={indication} primaryText={indication} />})}
          </SelectField>
          : null     
        }

        <h4>Induced</h4>
        <RadioButtons type="induced" selected={induced}/>

        {induced === 'Yes' ? 
          <SelectField floatingLabelText="Induction Reason" value={induction_reason}
            errorText={warn && !validations.induction_reason && 'Please enter a valid reason for induction'}
            onChange={(e, data) => handleSelect(e, data, 'induction_reason')}>
            {form.inductions.map((induction, i) => {return <MenuItem key={i} value={induction} primaryText={induction} />})}
          </SelectField>
          : null 
        }
      </Container>
    </Fieldset>
  )
}

const mapState = (state) => {
  return {
    type: state.delivery.type,
    indication: state.delivery.indication,
    induced: state.delivery.induced,
    induction_reason: state.delivery.induction_reason,
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
    handleDate(e, date){
      handleChange('date', date)
    },
    handleSelect(e, data, type){
      handleChange(type, data)
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Delivery))