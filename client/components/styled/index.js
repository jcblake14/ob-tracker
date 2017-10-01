import styled from 'styled-components';
import {Link} from 'react-router-dom';
import theme from '../../theme'

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.row ? 'row' : 'column'};
  flex-wrap : ${props => props.wrap ? 'wrap' : ''}
  height: ${props => props.row || props.short ? '' : '100%'};
  text-align: ${props => props.center ? 'center' : ''} ;
  justify-content: ${props => props.fullWidth ? 'center' : ''};
  width: ${props => props.fullWidth ? '100vw' : props.width || ''};
  align-items: ${props => props.center ? 'center' : props.start ? 'flex-start' : ''};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.content};
  width: 100%;
  height: 100%;
  align-self: stretch;
  align-items: center;
`

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.sidebar};
  color: ${theme.sidebar1};
  box-shadow: 0px 0px 12px #2B2B2B;
  z-index: 1;
`;

export const SideTitle = styled.h3`
  text-align: center;
  font-weight: normal;
  color: ${theme.sidebar1}
  margin-bottom: ${props => props.lower ? '-14px' : props.header ? '' : '6px'};
`

export const Bar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.nav ? 'flex-end' : 'center'};
  width: 100%;
  height: 60px;
  align-items: center;
  background-color: ${props => props.nav ? theme.navbar : theme.navbar}
`;

export const Fieldset = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`

export const Warning = styled.h5`
  color: red;
`

export const AuthLink = styled(Link)`
  margin-top: 20px;
  color: grey;
  font-size: 12px;
  &:visited{
    text-decoration: none;
  }
  &:active{
    text-decoration: none;
  }
  &:hover{
    text-decoration: none;
  }
`

export const Intro = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${theme.comingSoon1};
  color: ${theme.sidebar};
`
export const IntroCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 80vw;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
  padding: 20px 30px;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 12px 38px black;
`;

export const Title = styled.h1`
  color: ${theme.comingSoon};
  font-size: 60px;
  letter-spacing: 8px;
  text-shadow: 2px 2px ${theme.comingSoon1};
  margin: 50px 0px 0px 0px;
`

export const SubTitle = styled.h1`
  color: ${theme.comingSoon};
  font-size: 20px;
  letter-spacing: 2px;
  text-shadow: 1px 1px ${theme.comingSoon1};
  margin: 0px;
`

export const IntroBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  align-items: center;
`;

export const IntroLinks = styled(Link)`
  color: ${theme.sidebar};
  font-family: Montserrat;
  width: ${props => props.width || ''};
  &:visited: {
    text-decoration: none;
  }
`

export const IntroNotify = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 2px solid ${theme.comingSoon};
  border-radius: 2px;
`

export const Input = styled.input`
  width: 200px;
  border: 0px;
  border-radius: 2px;
  padding: 10px;
  color: ${theme.color5};
  &::placeholder{
    color: ${theme.color5};
  }
`

export const AuthInput = styled.input`
  width: 180px;
  border: 2px solid ${theme.color5a};
  border-radius: 2px;
  padding: 10px;
  margin: 10px 0px;
  color: ${theme.color5};
  &::placeholder{
    color: ${theme.color5};
  }
`

export const Label = styled.h5`
  margin-top: 0px;
  margin-left: -9px;
  margin-bottom: 5px;
  font-weight: normal;
  font-family: Roboto;
`