import { connect } from 'react-redux'
import orders from "../components/orders"
import Api from "../API/parkingLotAPI"
const mapStateToProps = (state, ownProps) => {
    return {
        ordersList: state.orderReducers
    }

}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onGetAllOrders:()=>{
            Api.getAllOrders(dispatch)
        },
        onPatchOrder:(id)=>{
            console.log(id)
            Api.patchOrderStatus(id,dispatch);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(orders)