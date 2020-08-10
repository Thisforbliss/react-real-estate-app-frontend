import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import {addBuyer} from '../actions/actions'
import { connect } from 'react-redux'

class BuyerInput extends Component {

  

constructor() {
    super();

    this.state ={
        propertyType: '',
        propertyValue: '',
        timeFrame: '',
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

        //   if (this.state.propertyType && this.state.propertyValue && this.state.timeFrame && this.state.city && this.state.state && this.state.fullName  && this.state.Zipcode && this.state.phoneNumber !== ""){
            //this is a super long way but it these inputs equal to a empty string it wont go to the next function.
        this.props.addBuyer({
            propertyType: this.state.propertyType,
            propertyValue: this.state.propertyValue,
            timeFrame:  this.state.timeFrame,
            city: this.state.city,
            state: this.state.state,
            zipCode: this.state.zipCode,
            fullName: this.state.fullName,
            phoneNumber: this.state.phoneNumber
        })

        this.setState( {
            propertyType: '',
            propertyValue: '',
            timeFrame: '',
            city: '',
            state: '',
            zipCode: '',
            fullName: '',
            phoneNumber: ''
        })
     }
    //  }
// you could also pass in "required" into the input required fields and it wont pass the value to the index store
    render() {
        return (
          <div>
            <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
            <h2>Interested in finding discounted properties from homeowners and wholesalers?</h2> <br></br> 
            <h2>Fill out this information below.</h2><br/><br/>
            <h4>What type of property are you interested in?</h4><h4> Single Family, Multi-Family, Condo, Town Home, Mobile Home, Commercial?</h4>
            <input required type= 'text' name='propertyType' value={this.state.propertyType} placeholder = 'Property Type' onChange={(event) => this.handleOnChange(event)}/> 
            <h4>How much is your property worth? </h4>
            <input required  name='propertyValue' value={this.state.propertyValue} placeholder = 'Property Value' onChange={(event) => this.handleOnChange(event)}/>
            <h4>When do you want to sell your property by?</h4>
            <input required name='timeFrame' value={this.state.timeFrame} placeholder = 'Days You Hold Property' onChange={(event) => this.handleOnChange(event)}/>
            <h4>Where are you interested in purchasing realestate?</h4>
            <input required name='city' value={this.state.city} placeholder = 'City' onChange={(event) => this.handleOnChange(event)}/>
            <input required name='state' value={this.state.state} placeholder = 'State' onChange={(event) => this.handleOnChange(event)}/>
            <input required name='zipCode' value={this.state.zipcode} placeholder = 'Zip Code' onChange={(event) => this.handleOnChange(event)}/>
            <h4>Your Full Name?</h4>
            <input required name='fullName' value={this.state.fullName} placeholder = 'Full Name' onChange={(event) => this.handleOnChange(event)}/>
            <h4> Best number for homeowners and wholesalers to reach you? </h4>
            <input required name='phoneNumber' value={this.state.phoneNumber} placeholder = 'Phone Number' onChange={(event) => this.handleOnChange(event)}/>{' '}
            <Button as="input" type="submit" value="Submit" />
            </form>                    
          </div>        
        );
    }
}

export default connect(null, {addBuyer})(BuyerInput)