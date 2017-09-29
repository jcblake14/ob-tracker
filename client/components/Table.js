import React from 'react'
import history from '../history'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {newSort, deleteDelivery} from '../store'
import {Container} from './styled'
import theme from '../theme'

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

const style={
  backgroundColor: theme.content,
}

const deleteButton = {
  fontSize: '20px'
}

const age = {
  width: '25px'
}

const date = {
  width: '75px'
}

function DeliveriesTable(props){
  let {handleClick, handleDelete, segment, sortTable} = props;

  segment = segment.sort((a, b) => {
    if (!sortTable.column) return b.date < a.date ? -1 : 1;
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
      <Table style={style} multiSelectable={true}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn style={date}>Date<SortButton column="date"/></TableHeaderColumn>
            <TableHeaderColumn>Delivery Type<SortButton column="type"/></TableHeaderColumn>
            <TableHeaderColumn>Indication<SortButton column="indication"/></TableHeaderColumn>
            <TableHeaderColumn>Induction Reason<SortButton column="induction_reason"/></TableHeaderColumn>
            <TableHeaderColumn style={age}>Age<SortButton column="patient_age"/></TableHeaderColumn>
            <TableHeaderColumn>Gest. Age<SortButton column="gestational_age"/></TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {segment.map((del, i) => (
            <TableRow key={i}>
              <TableRowColumn style={date}>{del.date.slice(0, 10)}</TableRowColumn>
              <TableRowColumn>{del.type}</TableRowColumn>
              <TableRowColumn>{del.indication || 'N/A'}</TableRowColumn>
              <TableRowColumn>{del.induction_reason || 'N/A'}</TableRowColumn>
              <TableRowColumn style={age}>{del.patient_age}</TableRowColumn>
              <TableRowColumn>{`${Math.floor(del.gestational_age / 7)}w ${del.gestational_age % 7}d`}</TableRowColumn>
              <TableRowColumn>
                <IconButton
                  iconClassName={"material-icons"}
                  iconStyle={deleteButton}
                  onClick={(e) => handleDelete(e, del)}>
                  delete
                </IconButton>
              </TableRowColumn>
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
    },
    handleDelete(e, d){
      dispatch(deleteDelivery(d.id, d.userId))
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(DeliveriesTable))