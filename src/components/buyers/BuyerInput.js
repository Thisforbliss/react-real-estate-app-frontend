import React, { Component } from 'react';
import {Button} from 'react-bootstrap'

class BuyerInput extends Component {

  

constructor() {
    super();

    this.state ={
        propertyType: '',
        propertyValue: '',
        timeframe: '',
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
        this.props.addBuyer({
            propertyType: this.state.propertyType,
            propertyValue: this.state.propertyValue,
            timeframe:  this.state.timeframe,
            city: this.state.city,
            state: this.state.state,
            zipCode: this.state.zipCode,
            fullName: this.state.fullName,
            phoneNumber: this.state.phoneNumber
        })

        this.setState ={
            propertyType: '',
            propertyValue: '',
            timeframe: '',
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
            <h2>Interested in finding discounted properties from homeowners and wholesalers?</h2> <br></br> 
            <h2>Fill out this information below.</h2><br/><br/>
            <h4>What type of property are you interested in?</h4><h4> Single Family, Multi-Family, Condo, Town Home, Mobile Home, Commercial?</h4>
            <input type= 'text' name='propertyType' value={this.state.propertyType} placeholder = 'Property Type' onChange={(event) => this.handleOnChange(event)}/>
            <h4>How much is your property worth? </h4>
            <input name='propertyValue' value={this.state.propertyValue} placeholder = 'Property Value' onChange={(event) => this.handleOnChange(event)}/>
            <h4>When do you want to sell your property by?</h4>
            <input name='timeframe' value={this.state.timeframe} placeholder = 'Property Type' onChange={(event) => this.handleOnChange(event)}/>
            <h4>Where are you interested in purchasing realestate?</h4>
            <input name='city' value={this.state.city} placeholder = 'City' onChange={(event) => this.handleOnChange(event)}/>
            <input name='state' value={this.state.state} placeholder = 'State' onChange={(event) => this.handleOnChange(event)}/>
            <input name='zipCode' value={this.state.zipcode} placeholder = 'Zip Code' onChange={(event) => this.handleOnChange(event)}/>
            <h4>Your Full Name?</h4>
            <input name='fullName' value={this.state.fullName} placeholder = 'Full Name' onChange={(event) => this.handleOnChange(event)}/>
            <h4> Best number for homeowners and wholesalers to reach you? </h4>
            <input name='phoneNumber' value={this.state.phoneNumber} placeholder = 'Phone Number' onChange={(event) => this.handleOnChange(event)}/>{' '}
            <Button as="input" type="submit" value="Submit" />
            </form>                    
          </div>        
        );
    }
}

export default BuyerInput