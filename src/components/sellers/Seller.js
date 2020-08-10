import React from 'react'
import {Table} from 'react-bootstrap'

const Seller = (props) => {
return (
    
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>FUll Name</th>
        <th>Phone Number</th>
        <th>Property Type</th>
        <th>Property Value</th>
        <th>City</th>
        <th>State</th>
        <th>Zip Code</th>
        <th>Time To Sell</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td> {props.buyer.fullName}</td>
        <td>{props.buyer.phoneNumber}</td>
        <td>{props.buyer.propertyType}</td>
        <td>{props.buyer.propertyValue}</td>
        <td>{props.buyer.city}</td>
        <td>{props.buyer.state}</td>
        <td>{props.buyer.zipCode}</td>
        <td>{props.buyer.timeFrame}</td>

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

export default Seller



