import React, { Component } from 'react'
import { connect } from 'react-redux'
import SellerInput from '../components/sellers/SellerInput'
// import Sellers from '../components/sellers/Sellers'


class SellersContainer extends Component {

    render(){
       return(
        <div>
            <SellerInput addSeller = {this.props.addSeller}/>
            {/* <Sellers sellers= {this.props.sellers} /> */}
        </div>
       )
    }

}
    const mapStateToProps = state => {
        return({
            sellers: state.sellers
        })
    }

    const mapDispatchToProps = dispatch => {
        return({
            addSeller: (sellerData) => dispatch({type: 'ADD_SELLER', sellerData }),
            deleteSeller: (id) => dispatch({type:'DELETE_Seller',  id})
        })
    }


    export default connect(mapStateToProps, mapDispatchToProps)(SellersContainer)
