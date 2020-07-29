import React from 'react';
import SellersContainer from './containers/SellersContainer'
import BuyersContainer from './containers/BuyersContainer'
import './App.css';
import {connect} from 'react-redux'

class App extends React.Component {

  render() {
    return (
      <div className="App">
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