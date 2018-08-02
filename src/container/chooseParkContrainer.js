import { connect } from 'react-redux'
import choosePark from "../components/choosePark"
import Api from "../API/parkingLotAPI"
const mapStateToProps = (state, ownProps) => {
    return {
        ordersList: state.orderReducers
    }

}
const mapDispatchToProps = (dispatch, ownProps) => {
   
    return {
        onGetMyOrders:()=>{
            Api.getBoyOrders(dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(choosePark)