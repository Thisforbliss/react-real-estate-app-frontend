import React, { Component } from 'react'
import { connect } from 'react-redux'
import BuyerInput from '../components/buyers/BuyerInput'
import {fetchSellers} from '../components/actions/actions'
import Buyers from '../components/buyers/Buyers'
import {Route} from 'react-router-dom'

class BuyersContainer extends Component {

    componentDidMount(){
        this.props.fetchSellers()
    }


    render(){
       return(
        <div>
           <Route exact path='/buyers/new' render={() => <BuyerInput addSeller={this.props.addBuyer}/>}/>
            
            <Route exact path='/sellers' render={() => <Buyers sellers={this.props.sellers}/>}/>
             
        </div>
       )
    }

}
    const mapStateToProps = state => {
        return({
            sellers: state.sellers.sellers
        })
    }

    // const mapDispatchToProps = dispatch => {
    //     return({
    //         addBuyer: (buyerData) => dispatch({type: 'ADD_BUYER', buyerData }),
    //         deleteBuyer: (id) => dispatch({type:'DELETE_BUYER',  id})
    //     })
    // }


    export default connect(mapStateToProps, {fetchSellers})(BuyersContainer)
