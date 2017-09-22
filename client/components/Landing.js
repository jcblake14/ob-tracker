import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {Login} from '../components'
import {Container, Panel, Intro, IntroLink} from './styled'
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';

const iconStyle = {fontSize: '60px', color: 'white', fontWeight: 'bold'}

function icon(type){
  return <i className="material-icons" style={iconStyle}>{type}</i>
}

function Landing(props){
  return (
    <Container row center>
      <Dialog modal={false} open={props.path === '/login' && !props.isLoggedIn}>
        <Login />
      </Dialog>
      <IntroLink to="/demo">
        <Panel left>
          <Container row center>
            {icon('arrow_back')}
            <Intro> Demo</Intro>
          </Container>
        </Panel>  
      </IntroLink>
      <IntroLink to="/login">      
        <Panel right>
          <Container row center>
            <Intro>Sign Up </Intro>
            {icon('arrow_forward')}
          </Container>
        </Panel>
      </IntroLink>
    </Container>
  )
}

const mapState = (state, ownProps) => {
  return {
    path: ownProps.match.path,
    isLoggedIn: !!state.user.id
  }
}

export default withRouter(connect(mapState)(Landing))