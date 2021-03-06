
export function fetchBuyers(){
    
    return (dispatch) => {
        fetch('http://localhost:3002/api/v1/buyers')
        .then(response => response.json())
        .then(buyers => {
            console.log(buyers)
            dispatch({
            type: "FETCH_BUYERS", 
            payload: buyers
        })})
    }
}



export function fetchSellers(){
    return (dispatch) => {
    fetch('http://localhost:3002/api/v1/sellers')
    .then(response => response.json())
    .then(sellers => 
        { console.log ("Fetching Sellers",sellers)
        dispatch({type: 'FETCH_SELLERS', payload: sellers })
        
   })
    }
}

// export function fetchSellers(){
//     return (dispatch) => {
//         fetch('http://localhost:3002/api/v1/sellers')
//         .then(response => response.json())
//         .then(sellers => dispatch({type:'FETCH _SELLERS', payload:sellers}))
//     }
// }

export function addSeller  (seller) {
    return (dispatch) => {
        fetch('http://localhost:3002/api/v1/sellers',{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(seller)
        }).then(response => response.json())      
        .then(seller => dispatch({type: 'ADD_SELLER', payload: seller}))


    }
}

// export function addBuyer  (buyer) {
//     console.log ('ADD Buyer FUNCTION')
//     return (dispatch) => {
//         fetch('http://localhost:3002/api/v1/buyers',{
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             method: 'POST',
//             body: JSON.stringify(buyer)
//         }).then(response =>
//              response.json())
//         .then(buyer => dispatch({type: 'ADD_BUYER', payload: buyer}))      

//     }
// }

export function addBuyer(buyer){
    return (dispatch) => {
        fetch('http://localhost:3002/api/v1/buyers',{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(buyer)})
            .then(response => response.json())
            .then(buyer => dispatch({type:'ADD_BUYER', payload: buyer}))

    }
}
//make youre good in react state which this.state