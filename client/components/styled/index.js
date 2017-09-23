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

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.left ? theme.colorLeft : theme.colorRight};
  width: 100%;
  &:hover{
    background-color: #DEE3E5;
  }
`

export const IntroLink = styled(Link)`
  width: 100%;
`

export const IntroText = styled.h1`
  color: white;
  font-size: 60px;
`

export const Bar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify};
  width: 100%;
  height: 60px;
  align-items: center;
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

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  background: ${theme.color4};
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
  background-color: ${theme.color5};
  color: ${theme.color1};
`
export const IntroCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 80vw;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
  padding: 20px;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 12px 38px black;
`;

export const Title = styled.h1`
  color: ${theme.color1};
  font-size: 60px;
  letter-spacing: 8px;
  text-shadow: 2px 2px ${theme.color5a};
  margin: 50px 0px 0px 0px;
`

export const SubTitle = styled.h1`
  color: ${theme.color1};
  font-size: 20px;
  letter-spacing: 2px;
  text-shadow: 1px 1px ${theme.color5a};
  margin: 0px;
`

export const IntroBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  align-items: center;
`;

export const IntroLinks = styled(Link)`
  color: ${theme.color5};
  font-family: Montserrat;
  width: ${props => props.width || ''}
`

export const IntroNotify = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 2px solid ${theme.color5a};
  border-radius: 2px;
`

export const Input = styled.input`
  width: 200px,
  border: 0px,
  border-radius: 2px,
  padding: 10px,
  color: ${theme.color1},
  &:placeholder{
    color: red;
  }
`