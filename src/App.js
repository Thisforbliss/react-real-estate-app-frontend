import React from 'react';
import SellersContainer from './containers/SellersContainer'
import BuyersContainer from './containers/BuyersContainer'
import './App.css';
import {connect} from 'react-redux'
import {Navigation} from './components/navigation/Navigation'
import {Badge} from 'react-bootstrap'



class App extends React.Component {

  render() {
    return (
     
      <div className="App">
        <h3 className = 'm-3 d-flex justify-content-center'> </h3>
        <div>
  <h1>
  One Stop Shop For Executing Deals<Badge variant="secondary"></Badge>
  </h1>
</div>
        <Navigation/>
      <SellersContainer/>
      <BuyersContainer/>
      </div>
    
    );
  }

}
  


  const mapStateToProps = (state) => {
    return {
      sellers: state.sellers,
      buyers: state.buyers
    }

  }


export default  connect(mapStateToProps)(App)