import * as types from '../constants/ActionTypes'
export default (state=[], action) => {
    switch (action.type) {
       case types.ORDERSLIST:{
            let newState = [...action.ordersList]
            return newState;
        }
        case types.PATCHORDER:{
            let newState = [...state]
            return newState.filter(i=>i.id!==action.ordersItem.id)
        } 
        default:
            return state
    }
}