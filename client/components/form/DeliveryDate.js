import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {updateField} from '../../store'
import {Container, Fieldset} from '../styled'

// Material UI Imports
import DatePicker from 'material-ui/DatePicker';

const DeliveryDate = (props) => {
  const {handleDate} = props

  return (
    <Fieldset>
      <h4>Date</h4>
      <Container>
        <DatePicker hintText="Delivery Date" onChange={handleDate}/>
      </Container>
    </Fieldset>
  )
}

const mapState = (state) => {
  return {
    date: state.delivery.date,
  }
}

const mapDispatch = (dispatch) => {
  function handleChange(type, data){
    dispatch(updateField(type, data));
  }

  return {
    handleDate(e, date){
      handleChange('date', date)
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(DeliveryDate))