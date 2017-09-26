import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {setDate, clearDate} from '../store'
import {Container, SideTitle} from './styled'
import history from '../history'
import theme from '../theme'

// Material UI imports
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

const style = {
  margin: 12,
};

const datePickerStyle = {
  width: '100%',
  paddingLeft: '16px',
  margin: '0px 10px',
  color: theme.sidebar1,
  fontFamily: 'Montserrat'
}

function FilterDate(props){
  return (
    <Container style={{padding: '0px 16px'}}>
      <SideTitle>Limit by Date</SideTitle>
      <Container>
        <RaisedButton label="Last 7 Days" style={style} onClick={(e) => props.handleClick(e, 7)}/>
        <RaisedButton label="Last 30 Days" style={style} onClick={(e) => props.handleClick(e, 30)}/>
        <RaisedButton label="This Year (beta)" style={style} disabled={true}/>
        <DatePicker hintText="Start Date" mode="landscape" value={props.start} hintStyle={datePickerStyle} inputStyle={datePickerStyle} style={style} onChange={(e, d) => props.handleDate(e, d, 'start')}/>
        <DatePicker hintText="End Date" mode="landscape" value={props.end} hintStyle={datePickerStyle} inputStyle={datePickerStyle} style={style} onChange={(e, d) => props.handleDate(e, d, 'end')}/>   
        <RaisedButton label="Clear Date" style={style} secondary={true} disabled={!props.start && !props.end} onClick={props.handleClick} />  
      </Container>
    </Container>
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

export default withRouter(connect(mapState, mapDispatch)(FilterDate))