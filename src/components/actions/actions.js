
export function fetchBuyers(){
    
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/buyers')
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
    console.log('inside fetch sellers')
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/sellers')
    .then(response => response.json())
    .then(sellers => 
        { console.log ("Fetching Sellers",sellers)
        dispatch({
        type: 'FETCH_SELLERS', payload: sellers
    })})
    }
}

export const addSeller = (seller) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/sellers',{
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