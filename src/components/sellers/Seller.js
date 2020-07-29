import React from 'react'


const Seller = (props) => {
return (
    
    <li>
        {props.buyer.fullName}, 
        {props.buyer.phoneNumber}, 
        {props.buyer.propertyType}, 
        {props.buyer.PropertyValue}, 
        {props.buyer.timeFrame}, 
        {props.buyer.city}, 
        {props.buyer.state}, 
        {props.buyer.zipCode} 
    </li>
        
)
}

export default Seller