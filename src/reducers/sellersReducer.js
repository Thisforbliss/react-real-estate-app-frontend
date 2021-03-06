// import cuid from 'cuid'
// export const cuidFn = cuid





const sellersReducer = (state = { sellers: [], loading: false}, action) => {

    switch(action.type) {
        case 'ADD_SELLER': 

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
                sellers: [...state.sellers, action.payload ],//action.sellerData
                loading: true
            }

        case 'DELETE_SELLER':
            return {
                ...state,
                sellers: state.sellers.filter(seller => seller.id !== action.id)     
            }

            case 'FETCH_SELLERS':
                return { sellers: action.payload} 

        default:
            return state
    }       
}

export default sellersReducer