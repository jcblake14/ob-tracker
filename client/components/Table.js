import React from 'react'
import history from '../history'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {newSort} from '../store'
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


function DeliveriesTable(props){
  let {handleClick, segment, sortTable} = props;

  segment = segment.sort((a, b) => {
    if (!sortTable.column) return a.date < b.date ? -1 : 1;
    [a, b] = sortTable.order === 'desc' ? [b, a] : [a, b];
    if (typeof a[sortTable.column] === 'number') return a[sortTable.column] - b[sortTable.column];
    if (typeof a[sortTable.column] === 'string') return a[sortTable.column] <= b[sortTable.column] ? -1 : 1;
  });

  function SortButton(props){
    let {column} = props;
    let icon = sortTable.column === column ? sortTable.order === 'asc' ? 'fa fa-sort-asc' : 'fa fa-sort-desc' : 'fa fa-sort'
    return (
      <IconButton
        iconStyle={{ fontSize: "12px" }}
        iconClassName={icon}
        onClick={(e) => handleClick(e, props.column)}
      >
      </IconButton>
    )
  }

  return (
    <Container short center>
      <h1>Deliveries</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Date<SortButton column="date"/></TableHeaderColumn>
            <TableHeaderColumn>Delivery Type<SortButton column="type"/></TableHeaderColumn>
            <TableHeaderColumn>Indication<SortButton column="indication"/></TableHeaderColumn>
            <TableHeaderColumn>Induction Reason<SortButton column="induction_reason"/></TableHeaderColumn>
            <TableHeaderColumn>Age<SortButton column="patient_age"/></TableHeaderColumn>
            <TableHeaderColumn>Gestational Age<SortButton column="gestational_age"/></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {segment.map((del, i) => (
            <TableRow key={i}>
              <TableRowColumn>{del.date.slice(0, 10)}</TableRowColumn>
              <TableRowColumn>{del.type}</TableRowColumn>
              <TableRowColumn>{del.indication || 'N/A'}</TableRowColumn>
              <TableRowColumn>{del.induction_reason || 'N/A'}</TableRowColumn>
              <TableRowColumn>{del.patient_age}</TableRowColumn>
              <TableRowColumn>{`${Math.floor(del.gestational_age / 7)}w ${del.gestational_age % 7}d`}</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  )
}


const mapState = (state) => {
  return {
    sortTable: state.sortTable,
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick(e, column){
      dispatch(newSort(column));
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(DeliveriesTable))