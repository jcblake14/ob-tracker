import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {auth, getDeliveries} from '../store'
import {Chart, Sidebar, Table, Navbar} from '../components'
import {Container, Content} from './styled'
import {filterByRange, applyFilters, buildChartData} from '../utils'

class Dashboard extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if (!this.props.isLoggedIn && this.props.location.pathname === '/demo') {this.props.logInDemo()}
    else this.props.getDeliveries(this.props.userId);
  }

  render(){
    let {userId, deliveries, range, filters, sortTable} = this.props
    deliveries = filterByRange(deliveries, range);
    deliveries = applyFilters(deliveries, filters);
    
    return (
      <Container row start>
        <Sidebar />
        {deliveries.length ?
        <Content>
          <Navbar />
          <Container row>
            <Chart segment={buildChartData(deliveries, 'type')} title={'Delivery type'} name={'type'}/>
            <Chart segment={buildChartData(deliveries, 'induced')} title={'Induced'} name={'induced'}/>
          </Container>
          <Table segment={deliveries}/>
        </Content> :
        <Content fullWidth row center>
          <h3>No deliveries to display</h3>
        </Content>
        }
      </Container>
    )
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    userId: state.user.id,
    deliveries: state.deliveries,
    range: state.range,
    filters: state.filters,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getDeliveries(userId){
      dispatch(getDeliveries(userId))
    },
    logInDemo(){
      dispatch(auth(process.env.TEST_EMAIL || 'obtrackertest@gmail.com', process.env.TEST_PASSWORD || 'obtrackertest1', 'login'))
    }
  }
}

export default connect(mapState, mapDispatch)(Dashboard)

Dashboard.propTypes = {
  email: PropTypes.string,
  deliveries: PropTypes.array
}