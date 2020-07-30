import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import {addSeller} from '../actions/actions'

class SellerInput extends Component {


constructor() {
    super();

    this.state ={
        propertyType: '',
        propertyValue: '',
        timeframe: '',
        streetAdress: '',
        unit: '',
        city: '',
        state: '',
        zipCode: '',
        fullName: '',
        phoneNumber: ''
    }
}

    handleOnChange = event => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.addSeller(this.state)
         
        this.setState ={
            propertyType: '',
            propertyValue: '',
            timeframe: '',
            streetAdress: '',
            unit: '',
            city: '',
            state: '',
            zipCode: '',
            fullName: '',
            phoneNumber: ''
        }
    }


    render() {
        return (
          <div>
            <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
            
            <h2>Interested in selling your home or contract? Fill out the form below.</h2><br/><br/><br/>
            <h4>What type of Property do you have? Single Family, Multi-Family, Condo, Town Home, Mobile Home, Commercial?</h4>
            <input type= 'text' name='propertyType' value={this.state.propertyType} placeholder = 'Property Type' onChange={(event) => this.handleOnChange(event)}/>
            <h4>How much is your property worth? </h4>
            <input name='propertyValue' value={this.state.propertyValue} placeholder = 'Property Value' onChange={(event) => this.handleOnChange(event)}/>
            <h4>When do you want to sell your property by?</h4>
            <input name='timeframe' value={this.state.timeframe} placeholder = 'Date Want House Sold ' onChange={(event) => this.handleOnChange(event)}/>
            <h4>What is the property address?</h4>
            <input name='streetAdress' value={this.state.streetAdress} placeholder = 'Property Type' onChange={ this.handleOnChange}/>
            <input name='unit' value={this.state.unit} placeholder = 'Unit' onChange={ this.handleOnChange}/>
            <input name='city' value={this.state.city} placeholder = 'City' onChange={(event) => this.handleOnChange(event)}/>
            <input name='state' value={this.state.state} placeholder = 'State' onChange={(event) => this.handleOnChange(event)}/>
            <input name='zipCode' value={this.state.zipcode} placeholder = 'Zip Code' onChange={(event) => this.handleOnChange(event)}/>
            <h4>Your Full Name?</h4>
            <input name='fullName' value={this.state.fullName} placeholder = 'Full Name' onChange={(event) => this.handleOnChange(event)}/>
            <h4> Best number to reach you? </h4>
            <input name='phoneNumber' value={this.state.phoneNumber} placeholder = 'Phone Number' onChange={(event) => this.handleOnChange(event)}/>{' '}
            <Button as="input" type="submit" value="Submit" />
            </form>      
          </div>     
        );
    }
}

 export default connect(null, {addSeller})(SellerInput)