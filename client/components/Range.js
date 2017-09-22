import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {setDate, clearDate} from '../store'
import {Container, Sidebar} from './styled'
import history from '../history'
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import {Card} from 'material-ui/Card';

const style = {
  margin: 12,
};

const datePickerStyle = {
  width: '100%',
  paddingLeft: '16px'
}

const cardStyle = {
  marginLeft: '20px',
  marginTop: '20px'
}

function Range(props){
  return (
    <Card style={cardStyle}>
      <h3 style={{textAlign: 'center'}}>Limit by Date</h3>
      <Container background={'#FFFAE3'}>
        <RaisedButton label="Last 7 Days" style={style} onClick={(e) => props.handleClick(e, 7)}/>
        <RaisedButton label="Last 30 Days" style={style} onClick={(e) => props.handleClick(e, 30)}/>
        <RaisedButton label="This Year (beta)" style={style} disabled={true}/>
        <DatePicker hintText="Start Date" mode="landscape" value={props.start} hintStyle={datePickerStyle} inputStyle={datePickerStyle} onChange={(e, d) => props.handleDate(e, d, 'start')}/>
        <DatePicker hintText="End Date" mode="landscape" value={props.end} hintStyle={datePickerStyle} inputStyle={datePickerStyle} onChange={(e, d) => props.handleDate(e, d, 'end')}/>   
        <RaisedButton label="Clear" style={style} secondary={true} disabled={!props.start && !props.end} onClick={props.handleClick} />  
      </Container>
    </Card>
  )
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    start: state.range.start,
    end: state.range.end
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleDate(e, date, type){
      dispatch(setDate(type, date))
    },
    handleClick(e, d){
      if (!d) {dispatch(clearDate())} 
      else {
        let today = new Date();
        let date = new Date();
        date.setDate(date.getDate() - d)
        dispatch(setDate('start', date))
        dispatch(setDate('end', today))        
      }
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Range))