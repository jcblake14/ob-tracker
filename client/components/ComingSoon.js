import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
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
  justifyContent: 'space-around'
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
              <Input placeholder="YOUR EMAIL"></Input>
              <FlatButton style={notify}>NOTIFY ME</FlatButton>
            </IntroNotify>

            <Container center>
              <SubTitle>- OR -</SubTitle>
            </Container>

            <Container>
              <Link to="/demo"><FlatButton style={demo}>TRY THE DEMO</FlatButton></Link>
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

export default withRouter(connect(mapState)(ComingSoon))