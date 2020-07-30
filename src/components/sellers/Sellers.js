import React from 'react';
// import {Button} from 'react-bootstrap'
import Seller from './Seller'
const Sellers = (props) => {


console.log("Buyers Data",props.buyers.buyers
)
        return (
            <div> 
                <h2>List Of Investors Interseted In Purchasing Your Wholesale Deal</h2>
                <h4>Below are the investors and the type of properties they're intersted in.</h4>
                {props.buyers.map(buyer => 
                <div key={buyer.id}>
                    <Seller buyer={buyer} />
                </div>)}

            </div>
            
        )


}

export default Sellers