import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {auth, getDeliveries, changeTab} from '../store'
import {Chart, Sidebar, Table, Navbar} from '../components'
import {Container, Content} from './styled'
import {filterByRange, applyFilters, buildChartData} from '../utils'

// Material UI imports
import {Tabs, Tab} from 'material-ui/Tabs';

const style = {
  width: '40%',
  margin: 'auto'
}

const inkBarStyle = {
  width: '40%',
  marginLeft: '80%',
  marginBottom: '20px'
}

class Dashboard extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if (!this.props.isLoggedIn && this.props.location.pathname === '/demo') {this.props.logInDemo()}
    else this.props.getDeliveries(this.props.userId);
  }

  render(){
    let {userId, deliveries, range, filters, sortTable, tab, handleTab} = this.props
    deliveries = filterByRange(deliveries, range);
    deliveries = applyFilters(deliveries, filters);
    
    return (
      <Container row start>
        <Sidebar />
        {deliveries.length ?
        <Content>
          <Navbar />
          <h2>Your Deliveries</h2>
          <Tabs value={tab} onChange={handleTab} tabItemContainerStyle={style} inkBarStyle={inkBarStyle}>
            <Tab label="Chart View" value="chart" disableTouchRipple={true}>
              <Container row center>
                <Chart segment={buildChartData(deliveries, 'type')} title={'Delivery type'} name={'type'}/>
                <Chart segment={buildChartData(deliveries, 'induced')} title={'Induced'} name={'induced'}/>
              </Container>
            </Tab>
            <Tab label="Table View" value="table" disableTouchRipple={true}>
              <Table segment={deliveries}/>
            </Tab>
          </Tabs>
        </Content>
        :
        <Content fullWidth row center>
          <Navbar />
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
    tab: state.tab
  }
}

const mapDispatch = (dispatch) => {
  return {
    getDeliveries(userId){
      dispatch(getDeliveries(userId))
    },
    logInDemo(){
      dispatch(auth(process.env.TEST_EMAIL || 'obtrackertest@gmail.com', process.env.TEST_PASSWORD || 'obtrackertest1', 'login'))
    },
    handleTab(value){
      dispatch(changeTab(value));
    }
  }
}

export default connect(mapState, mapDispatch)(Dashboard)

Dashboard.propTypes = {
  email: PropTypes.string,
  deliveries: PropTypes.array
}