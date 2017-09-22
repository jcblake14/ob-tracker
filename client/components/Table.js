import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Container} from './styled'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import history from '../history'

export default function (props){

  return (
    <Container short center>
      <h1>Deliveries</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Date</TableHeaderColumn>
            <TableHeaderColumn>Delivery Type</TableHeaderColumn>
            <TableHeaderColumn>Indication</TableHeaderColumn>
            <TableHeaderColumn>Induction Reason</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.segment.map((del, i) => (
            <TableRow key={i}>
              <TableRowColumn>{del.date.slice(0, 10)}</TableRowColumn>
              <TableRowColumn>{del.type}</TableRowColumn>
              <TableRowColumn>{del.indication || 'N/A'}</TableRowColumn>
              <TableRowColumn>{del.induction_reason || 'N/A'}</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  )
}