import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getDeliveries} from '../store'
import {Chart, Range, Table, Navbar} from '../components'
import {Container} from './styled'
import {filterByRange, buildChartData} from '../utils'

class Dashboard extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getDeliveries(this.props.userId);
  }

  render(){
    let {userId, deliveries, range} = this.props
    deliveries = filterByRange(deliveries, range);
    
    return (
      <Container row start>
        <Range />
        {deliveries.length ?
        <Container>
          <Container row>
            <Chart segment={buildChartData(deliveries, 'type')} title={'Delivery type'} name={'type'}/>
            <Chart segment={buildChartData(deliveries, 'induced')} title={'Induced'} name={'induced'}/>
          </Container>
          <Table segment={deliveries}/>
        </Container> :
        <Container fullWidth row center>
          <img src="/Eclipse.svg" style={{width: '30px'}}/>
        </Container>
        }
      </Container>
    )
  }
}

const mapState = (state) => {
  return {
    userId: state.user.id,
    deliveries: state.deliveries,
    range: state.range
  }
}

const mapDispatch = (dispatch) => {
  return {
    getDeliveries(userId){
      dispatch(getDeliveries(userId))
    }
  }
}



export default connect(mapState, mapDispatch)(Dashboard)

Dashboard.propTypes = {
  email: PropTypes.string,
  deliveries: PropTypes.array
}


// RENDER CHARTS SWITCH
/*


    function renderCharts(segmentName){
      switch(segmentName){
        case 'c_section':
          return <Chart segment={indication} title={'Indication'} name={'indication'}/>
        case 'induced':
          return <Chart segment={induction} title={'Induction Reason'} name={'induction_reason'}/>
        default:
          return (<Container row>
            <Chart segment={type} title={'Delivery type'} name={'type'}/>
            <Chart segment={induced} title={'Induced'} name={'induced'}/>
          </Container>)
      }
    }

function filterBySegment(deliveries, segment, value){
  return deliveries.filter(d => d[segment] === value);
}

deliveries = filterBySegment(deliveries, segmentName, value);


*/