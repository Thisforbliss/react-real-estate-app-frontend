import React from 'react'


const Buyer = (props) => {
return (
    
    <li>
        {props.seller.fullName}, 
        {props.seller.phoneNumber}, 
        {props.seller.propertyType}, 
        {props.seller.PropertyValue}, 
        {props.seller.timeFrame}, 
        {props.seller.city}, 
        {props.seller.state}, 
        {props.seller.zipCode} 
    </li>
        
)
}

export default Buyer