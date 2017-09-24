import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {setDate, clearDate} from '../store'
import {Container} from './styled'
import history from '../history'

function Sliders(props){
  return (
    <Container>
      <h3 style={{textAlign: 'center'}}>Filters</h3>
      <Container background={'#FFFAE3'}>
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

export default withRouter(connect(mapState, mapDispatch)(Sliders))