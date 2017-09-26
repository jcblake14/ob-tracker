import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {createDelivery, clearDelivery, toggleWarning} from '../store'
import FlatButton from 'material-ui/FlatButton';
import {Card, CardTitle, CardActions} from 'material-ui/Card';
import {Container, Fieldset, Warning} from './styled'
import {form, validate} from '../utils'
import {DeliveryDate, Information, Gestation, Delivery, Navbar} from '../components'

const style = {
  width: '40vw',
  minWidth: '460px',
  padding: '20px',
  marginTop: '20px'
}

const Form = (props) => {
  const {warn, handleClick} = props

  return (
    <Container>
      <Navbar />
      <Container row fullWidth>
        <Card style={style}>
          <CardTitle title="Add Delivery" />
          <CardActions>

            <DeliveryDate validations={validate(props)} />
            <Information validations={validate(props)} />
            <Gestation validations={validate(props)} />
            <Delivery validations={validate(props)} />

            <Container center>
              {warn && !validate(props) ? <Warning>Please complete the required fields</Warning> : null}
              <FlatButton label="Submit" primary={true} onClick={(e) => handleClick(e, validate(props))}/>
            </Container>

          </CardActions>
        </Card>
      </Container>
    </Container>
  )
}

const mapState = (state) => {
  return {
    date: state.delivery.date,
    patient_age: state.delivery.patient_age,
    gravidity: state.delivery.gravidity,
    parity: state.delivery.parity,
    bmi: state.delivery.bmi,
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

  return {
    handleClick(e, validations){
      if (!validations.all) {
        dispatch(toggleWarning(true));
      } else {
        dispatch(createDelivery())
        dispatch(clearDelivery());
        dispatch(toggleWarning(false));
      }
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Form))

Form.propTypes = {
  handleClick: PropTypes.func.isRequired,
}
