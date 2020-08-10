import React from 'react';
// import {Button} from 'react-bootstrap'
import Seller from './Seller'



const Sellers = (props) => {



        return (
                <div> 
                    <h2>List Of Home Owners and Wholesalers Ready To Make A Deal</h2>

                    {props.buyers.map(buyer => 
                    <div>
                        <Seller buyer={buyer} />
                    </div>)}
                </div>        
        )
}

export default Sellers