import React, { Component } from 'react'
import { connect } from 'react-redux'
import SellerInput from '../components/sellers/SellerInput'
import {fetchBuyers} from '../components/actions/actions'
import {addSeller} from '../components/actions/actions'
import Sellers from '../components/sellers/Sellers'
import {Route} from 'react-router-dom'



class SellersContainer extends Component {

    componentDidMount(){
        this.props.fetchBuyers()
    }

    render(){
       return(
        <div>
            <Route exact path='/sellers/new' render={() => <SellerInput addSeller={this.props.addSeller}/>}/>,
            
            <Route exact path='/buyers' render={() => <Sellers buyers={this.props.buyers}/>}/>
             
        </div>
       )
    }



    
}
    const mapStateToProps = state => {
        return({
            buyers: state.buyers.buyers
        })
    }

    // const mapDispatchToProps = dispatch => {
    //     return({
    //         addSeller: (sellerData) => dispatch({type: 'ADD_SELLER', sellerData }),
    //         deleteSeller: (id) => dispatch({type:'DELETE_SELLER',  id})
    //     })
    // }


    export default connect(mapStateToProps, {fetchBuyers, addSeller})(SellersContainer)
