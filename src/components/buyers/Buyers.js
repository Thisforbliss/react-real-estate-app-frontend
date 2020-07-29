import React from 'react';
// import {Button} from 'react-bootstrap'
import Buyer from './Buyer'
const Buyers = (props) => {


// console.log("Buyers Data",props.buyers.buyers)
        return (
            <div> 
                <h2>List Of Title Holders Ready To Make A Deal</h2>
                <h4>Below are the type of contracts the Title Holder Has</h4>
                {props.sellers.map(seller => 
                <div key={seller.id}>
                    <Buyer seller={seller} />
                </div>)}

            </div>
            
        )


}

export default Buyers