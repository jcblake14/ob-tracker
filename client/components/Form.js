import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {createDelivery, clearDelivery, updateField, makeDirty, toggleWarning} from '../store'
import history from '../history'
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardTitle, CardActions} from 'material-ui/Card';
import {Container, Fieldset, Warning} from './styled'
import {form} from '../utils'

const style = {
  width: '40vw',
  minWidth: '460px',
  padding: '20px',
}

const n_weeks = []
const n_days = []
for (var i = 0; i < 42; i++){
  if (i < 7) n_days.push(i);
  if (i >= 22) n_weeks.push(i);
}

const Form = (props) => {
  const {children,
    handleClick,
    handleChange,
    handleDate,
    handleSelect,
    patient_id,
    type,
    weeks,
    days,
    induced,
    indication,
    induction_reason,
    dirty,
    warn
  } = props

  const RadioButtons = (props) => (
    <div>
      <RadioButtonGroup name="C-Section" onChange={(e) => handleSelect(e, e.target.value, props.type)}>
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

  function validate(data){
    let valid = true;
    if (!data.date ||
      !data.days ||
      !data.patient_id ||
      !data.weeks ||
      !data.type ||
      (data.type === 'C-section' && data.indication === '') ||
      !data.induced ||
      (data.induced === 'Yes' && data.induction_reason === '')  
    ) valid = false;
    return valid;
  }

  return (
    <Container row fullWidth>
      <Card style={style}>
        <CardTitle title="Add Delivery" />
        <CardActions>
          <Fieldset>
            <h4>Information</h4>
            <Container>
              <DatePicker hintText="Delivery Date" onChange={handleDate}/>
              <SelectField floatingLabelText="Choose Patient" value={patient_id} 
                errorText={warn && patient_id === '' && 'Cannot be blank'}
                onChange={(e, data) => handleSelect(e, data, 'patient_id')}>
                {form.testData.map((patient, i) => {return <MenuItem key={i} value={i} primaryText={patient} />})}
              </SelectField>
            </Container>
          </Fieldset>

          <Fieldset>
            <h4>Gestational Age</h4>
            <Container>
              <SelectField floatingLabelText="Weeks" value={weeks}
                errorText={warn && weeks === '' && 'Cannot be blank'}
                onChange={(e, data) => handleSelect(e, data, 'weeks')}>
                {n_weeks.map((week, i) => {return <MenuItem key={i} value={i} primaryText={week} />})}
              </SelectField>
              <SelectField floatingLabelText="Days" value={days}
                errorText={warn && days === '' && 'Cannot be blank'}
                onChange={(e, data) => handleSelect(e, data, 'days')}>
                {n_days.map((day, i) => {return <MenuItem key={i} value={i} primaryText={day} />})}
              </SelectField>
            </Container>
          </Fieldset>

          <Fieldset>
            <h4>Delivery</h4>
            <Container>
              <SelectField floatingLabelText="Delivery Type" value={type}
                errorText={warn && type === '' && 'Cannot be blank'}
                onChange={(e, data) => handleSelect(e, data, 'type')}>
                {form.types.map((type, i) => {return <MenuItem key={i} value={type} primaryText={type} />})}
              </SelectField>        

              {type === "C-section" ? 
                <SelectField floatingLabelText="Indication" value={indication}
                  errorText={warn && indication === '' && 'Cannot be blank'}                
                  onChange={(e, data) => handleSelect(e, data, 'indication')}>
                  {form.indications.map((indication, i) => {return <MenuItem key={i} value={indication} primaryText={indication} />})}
                </SelectField>
                : null     
              }

              <h4>Induced</h4>
              <RadioButtons type="induced"/>

              {induced === 'Yes' ? 
                <SelectField floatingLabelText="Induction Reason" value={induction_reason}
                  errorText={warn && induction_reason === '' && 'Cannot be blank'}
                  onChange={(e, data) => handleSelect(e, data, 'induction_reason')}>
                  {form.inductions.map((induction, i) => {return <MenuItem key={i} value={induction} primaryText={induction} />})}
                </SelectField>
                : null 
              }
            </Container>
          </Fieldset>

          <Container center>
            {warn && !validate(props) ? <Warning>Please complete the required fields</Warning> : null}
            <FlatButton label="Submit" primary={true} onClick={(e) => handleClick(e, validate(props))}/>
          </Container>

        </CardActions>
      </Card>
    </Container>
  )
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    patient_id: state.delivery.patient_id,
    date: state.delivery.date,
    weeks: state.delivery.weeks,
    days: state.delivery.days,
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
    handleClick(e, valid){
      if (!valid) {
        dispatch(toggleWarning(true));
      } else {
        dispatch(createDelivery())
        dispatch(clearDelivery());
        dispatch(toggleWarning(false));
        history.push('/home')
      }
    },
    handleDate(e, date){
      handleChange('date', date)
    },
    handleSelect(e, data, type){
      handleChange(type, data)
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Form))

Form.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
