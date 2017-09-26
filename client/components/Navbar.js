import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'
import {Bar} from './styled'
import theme from '../theme'

// Material UI imports
import IconButton from 'material-ui/IconButton';
import {Card} from 'material-ui/Card';

function icon(type, icon){
 return <IconButton style={icon ? style : null} iconStyle={icon ? faStyle : iconStyle} iconClassName={icon || "material-icons"}>{type}</IconButton>
}
const iconStyle = {
  fontSize: "30px",
  color: theme.sidebar1
}

const faStyle = {
  fontSize: "30px",
  color: theme.sidebar1,
  marginTop: '-1px'
}

const style = {
  marginRight: '5px'
}

const Navbar = (props) => {
  const {handleClick} = props

  return (
    <Bar nav>
      <Link to="/home">{icon('', 'fa fa-tachometer')}</Link>
      <Link to="/new">{icon('add_circle')}</Link>
      <a href="#" onClick={handleClick}>{icon('exit_to_app')}</a>
    </Bar>
  )
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

export default withRouter(connect(null, mapDispatch)(Navbar))

Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
}
