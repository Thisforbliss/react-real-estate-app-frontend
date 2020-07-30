import React from 'react'
import {Table} from 'react-bootstrap'

const Buyer = (props) => {
return (
    
    
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>FUll Name</th>
        <th>Phone Number</th>
        <th>Property Type</th>
        <th>Property Value</th>
        <th>Street Address</th>
        <th># of Units</th>
        <th>City</th>
        <th>State</th>
        <th>Zip Code</th>
        <th>Time To Sell</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td> {props.seller.fullName}</td>
        <td>{props.seller.phoneNumber}</td>
        <td>{props.seller.propertyType}</td>
        <td>{props.seller.propertyValue}</td>
        <td>{props.seller.streetAddress}</td>
        <td>{props.seller.unit}</td>
        <td>{props.seller.city}</td>
        <td>{props.seller.state}</td>
        <td>{props.seller.zipCode}</td>
        <td>{props.seller.timeFrame}</td>

      </tr>
      {/* <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr> */}
    </tbody>
  </Table>    
        
)
}

export default Buyer
{/* <li>
        {props.seller.fullName},<br></br>
        {props.seller.phoneNumber}, 
        {props.seller.propertyType}, 
        {props.seller.PropertyValue},
        {props.seller.streetAddress},
        {props.seller.unit},
        {props.seller.city}, 
        {props.seller.state}, 
        {props.seller.zipCode} 
        {props.seller.timeFrame}, 
     </li>    */}
        