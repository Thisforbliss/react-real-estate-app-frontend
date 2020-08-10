import React from 'react';
import Buyer from './Buyer'


const Buyers = (props) => {
  

// console.log("Buyers Data",props.buyers.buyers)
        return (
            <div> 
                <h2>List Of Home Owners and Wholesalers Ready To Make A Deal</h2>

                {props.sellers.map(seller => 
                <div key={seller.id}>
                    <Buyer seller={seller} />
                </div>)}
            </div>
            
        )

}

export default Buyers