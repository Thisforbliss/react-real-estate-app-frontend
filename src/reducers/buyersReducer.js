const buyersReducer = (state = { buyers: [], loading: false}, action) => {

    switch(action.type) {
        case 'ADD_BUYER': 

            // const sellerObject = {
            //     // id: cuidFn(),
            //     propertyType: action.sellerpropertyType,
            //     propertyValue: action.propertyValue,
            //     timeframe: action.timeframe,
            //     streetAdress: action.streetAdress,
            //     unit: action.unit,
            //     city: action.city,
            //     state: action.state,
            //     zipCode: action.zipCode,
            //     fullName: action.fullName,
            //     phoneNumber: action.phoneNumber
            // }
            return {
                ...state,
                buyers: [...state.buyers, action.sellerData],
                loading: true
            }

        case 'DELETE_BUYER':
            return {
                ...state,
                buyers: state.buyers.filter(seller => seller.id !== action.id)     
            }

        case 'FETCH_BUYERS':
            return { buyers: action.payload} 

               
        default:
            return state
    }       
}

export default buyersReducer