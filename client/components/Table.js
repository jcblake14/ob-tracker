import React from 'react'
import PropTypes from 'prop-types'
import history from '../history'
import {connect} from 'react-redux'
import {Container} from './styled'

// Material UI imports
import IconButton from 'material-ui/IconButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

function SortButton(){
  return <IconButton iconStyle={{ fontSize: "12px" }} iconClassName="fa fa-sort"></IconButton>
}

export default function (props){
  return (
    <Container short center>
      <h1>Deliveries</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Date<SortButton/></TableHeaderColumn>
            <TableHeaderColumn>Delivery Type<SortButton/></TableHeaderColumn>
            <TableHeaderColumn>Indication<SortButton/></TableHeaderColumn>
            <TableHeaderColumn>Induction Reason<SortButton/></TableHeaderColumn>
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