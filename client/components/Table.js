import React from 'react'
import history from '../history'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {newSort, deleteDelivery, setSelected, setSelectedDeliveries, hideDeliveries} from '../store'
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
import RaisedButton from 'material-ui/RaisedButton';

const style={
  backgroundColor: theme.content,
}

const deleteButton = {
  fontSize: '20px'
}

const date = {width: '62px', padding: '0px 10px'}
const type = {width: '60px', padding: '0px 25px 0px 10px'}
const position = {width: '52px', padding: '0px 10px'}
const indication = {width: '60px', padding: '0px 10px'}
const induction = {width: '72px'}
const age = {width: '20px'}
const gestational_age = {width: '45px', padding: '0px 10px'}
const bmi = {width: '10px', paddingRight: '20px'}
const trash = {padding: '0px 30px 0px 0px', width: '20px'}

const button = {
  width: '108px',
  fontSize: '12px',
  margin: '10px 10px 0px 10px'
}

function DeliveriesTable(props){
  let {handleClick, handleDelete, handleSelect, handleHide, segment, sortTable, deliveries} = props;

  segment = segment.sort((a, b) => {
    if (!sortTable.column) return b.date < a.date ? -1 : 1;
    [a, b] = sortTable.order === 'desc' ? [b, a] : [a, b];
    if (typeof a[sortTable.column] === 'number') return a[sortTable.column] - b[sortTable.column];
    if (typeof a[sortTable.column] === 'string') return a[sortTable.column] <= b[sortTable.column] ? -1 : 1;
  });

  segment = segment.filter(s => !s.hidden);

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
    <Container short>
      <Table style={style} multiSelectable={true} onRowSelection={handleSelect}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn style={date}>Date<SortButton column="date"/></TableHeaderColumn>
            <TableHeaderColumn style={type}>Delivery Type<SortButton column="type"/></TableHeaderColumn>
            <TableHeaderColumn style={indication}>Indication<SortButton column="indication"/></TableHeaderColumn>
            <TableHeaderColumn style={induction}>Induction Reason<SortButton column="induction_reason"/></TableHeaderColumn>
            <TableHeaderColumn style={position}>Position<SortButton column="position"/></TableHeaderColumn>
            <TableHeaderColumn style={age}>Age<SortButton column="patient_age"/></TableHeaderColumn>
            <TableHeaderColumn style={gestational_age}>Gest. Age<SortButton column="gestational_age"/></TableHeaderColumn>
            <TableHeaderColumn style={bmi}>BMI<SortButton column="bmi"/></TableHeaderColumn>
            <TableHeaderColumn style={trash}></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody deselectOnClickaway={false}>
          {segment.map((del, i) => (
            <TableRow key={i}>
              <TableRowColumn style={date}>{del.date.slice(0, 10)}</TableRowColumn>
              <TableRowColumn style={type}>{del.type}</TableRowColumn>
              <TableRowColumn style={indication}>{del.indication || 'N/A'}</TableRowColumn>
              <TableRowColumn style={induction}>{del.induction_reason || 'N/A'}</TableRowColumn>
              <TableRowColumn style={position}>{del.position}</TableRowColumn>
              <TableRowColumn style={age}>{del.patient_age}</TableRowColumn>
              <TableRowColumn style={gestational_age}>{`${Math.floor(del.gestational_age / 7)}w ${del.gestational_age % 7}d`}</TableRowColumn>
              <TableRowColumn style={bmi}>{del.bmi}</TableRowColumn>
              <TableRowColumn style={trash}>
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
      {<Container row>
        <RaisedButton style={button} onClick={e => handleHide(deliveries)}>Hide selected</RaisedButton>
        <RaisedButton style={button}>Show all</RaisedButton>
      </Container>}
    </Container>
  )
}


const mapState = (state) => {
  return {
    sortTable: state.sortTable,
    deliveries: state.deliveries.all
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick(e, column){
      dispatch(newSort(column));
    },
    handleDelete(e, d){
      dispatch(deleteDelivery(d.id, d.userId))
    },
    handleSelect(idxs){
      // dispatch(setSelected(idxs));
      dispatch(setSelectedDeliveries(idxs));
    },
    handleHide(deliveries){
      dispatch(hideDeliveries(deliveries));
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(DeliveriesTable))