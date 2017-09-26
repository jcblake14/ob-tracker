import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'
import {Bar} from './styled'

// Material UI imports
import IconButton from 'material-ui/IconButton';
import {Card} from 'material-ui/Card';

function icon(type){
 return <IconButton iconStyle={iconStyle} iconClassName="material-icons">{type}</IconButton>
}
const iconStyle = {
  fontSize: "30px", color: 'black'
}

const Navbar = (props) => {
  const {handleClick} = props

  return (
    <Bar nav>
      <Link to="/home">{icon('home')}</Link>
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
