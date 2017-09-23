import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {Login} from '../components'
import {Container, Intro, IntroBar, Title, SubTitle, IntroCard, IntroLinks, IntroNotify, Input} from './styled'
import theme from '../theme'

// Material UI imports
import Dialog from 'material-ui/Dialog';
import {Card, CardTitle, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const logo1 = {
  width: '20px',
  height: '20px',
  marginRight: '10px'
}

const right = {
  flexGrow: '1',
  justifyContent: 'space-around'
}

const notify = {
  backgroundColor: theme.color5a,
  color: 'white',
  fontFamily: 'Montserrat',
  fontWeight: 'bold',
  borderRadius: '0px',
  width: '150px'
}

const demo = {
  backgroundColor: theme.color5a,
  color: 'white',
  fontFamily: 'Montserrat',
  fontWeight: 'bold',  
  width: '200px'
}

const input = {
  width: '200px',
  border: '0px',
  borderRadius: '2px',
  padding: '10px',
  color: theme.color5,
}

function ComingSoon(props){
  return (
    <Intro>
      <Dialog modal={false} open={props.path === '/login' && !props.isLoggedIn}>
        <Login />
      </Dialog>
      <IntroCard>

          <IntroBar>

            <Container style={{flexGrow: '5'}}>
                <IntroLinks to='/about' width={'100%'}>
                  <Container row>
                    <img src='/stethescope.png' style={logo1}/>
                    OB TRACKER
                  </Container>
                </IntroLinks>
            </Container>

            <Container row style={right}>
              <IntroLinks to="/about">ABOUT</IntroLinks>
              <IntroLinks to="/contact">CONTACT</IntroLinks>
            </Container>

          </IntroBar>

          <Container center>
            <Title>COMING SOON</Title>
          </Container>

          <IntroNotify>
            <Input style={input} placeholder="YOUR EMAIL"></Input>
            <FlatButton style={notify}>NOTIFY ME</FlatButton>
          </IntroNotify>

          <Container center>
            <SubTitle>- OR -</SubTitle>
          </Container>

          <Container>
            <Link to="/login"><FlatButton style={demo}>TRY THE DEMO</FlatButton></Link>
          </Container>

        </IntroCard>
    </Intro>
  )
}

const mapState = (state, ownProps) => {
  return {
    path: ownProps.match.path,
    isLoggedIn: !!state.user.id
  }
}

export default withRouter(connect(mapState)(ComingSoon))