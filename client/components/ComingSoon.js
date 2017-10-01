import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {auth} from '../store'
import {Login} from '../components'
import {Container, Intro, IntroBar, Title, SubTitle, IntroCard, IntroLinks, IntroNotify, Input} from './styled'
import theme from '../theme'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


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
  justifyContent: 'space-between'
}

const notify = {
  backgroundColor: theme.comingSoon,
  color: 'white',
  fontFamily: 'Montserrat',
  fontWeight: 'bold',
  borderRadius: '0px',
  width: '150px'
}

const demo = {
  backgroundColor: theme.comingSoon,
  color: 'white',
  fontFamily: 'Montserrat',
  fontWeight: 'bold',  
  width: '200px'
}

const dialog = {
  width: '450px'
}

function ComingSoon(props){
  return (
    <ReactCSSTransitionGroup
    transitionName="fade"
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionEnter={false}
    transitionLeave={false}
    >
      <Intro>
        <Dialog modal={false} open={props.path === '/login' && !props.isLoggedIn} contentStyle={dialog}>
          <Login />
        </Dialog>
        <IntroCard>

            <IntroBar>

              <Container style={{flexGrow: '15'}}>
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
              <Input placeholder="YOUR EMAIL"></Input>
              <FlatButton style={notify}>NOTIFY ME</FlatButton>
            </IntroNotify>

            <Container center>
              <SubTitle>- OR -</SubTitle>
            </Container>

            <Container>
              <FlatButton onClick={props.handleDemo} style={demo}>TRY THE DEMO</FlatButton>
            </Container>

          </IntroCard>
      </Intro>

    </ReactCSSTransitionGroup>
  )
}

const mapState = (state, ownProps) => {
  return {
    path: ownProps.match.path,
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleDemo(){
      dispatch(auth('obtrackertest@gmail.com', 'obtrackertest1', 'login'))      
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(ComingSoon))