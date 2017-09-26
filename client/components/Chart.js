import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import history from '../history'
import C3Chart from 'react-c3js';
import {Container} from './styled'
import {buildColumns} from '../utils'
import theme from '../theme'

export default function Chart(props){
  const columns= buildColumns(props.segment);
  
  const data = {
    type: 'donut',
    columns: columns,
    onclick: function (d, i) {
      console.log(d)
      // history.push(`/home/segment/${props.name}/${d.id}`)
    },
  }

  const legend = {
    position: 'bottom'
  }
  const gauge = {width: 65}
  const transition = {duration: 500}
  const size = {width: 450}
  const tooltip = {show: false}
  const donut = {
    label: {
      format: function (value, ratio, id) {
        return d3.format('%')(ratio);
      }
    }
  }
  const color = {
    pattern: [theme.color1, theme.color2, theme.color3]
  }

  return (
    <Container short center>
      <h3>{props.title}</h3>
      {columns.length ? <C3Chart data={data} legend={legend} gauge={gauge} transition={transition} size={size} tooltip={tooltip} donut={donut} color={color}/> : null}
    </Container>
  )
}