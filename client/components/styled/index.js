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
  width: ${props => props.fullWidth ? '100vw' : ''};
  align-items: ${props => props.center ? 'center' : props.start ? 'flex-start' : ''};
`;

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.left ? theme.color1 : theme.color2};
  width: 100%;
  &:hover{
    background-color: #DEE3E5;
  }
`

export const IntroLink = styled(Link)`
  width: 100%;
`

export const Intro = styled.h1`
  color: white;
  font-size: 60px;
`

export const Bar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
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