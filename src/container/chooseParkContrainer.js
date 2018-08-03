import { connect } from 'react-redux'
import choosePark from "../components/choosePark"
import Api from "../API/parkingLotAPI"
const mapStateToProps = (state, ownProps) => {
    return {
        parkinglots : state.parkingLotReducers
    }

}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onGetParkinglots:()=>{
            Api.getBoyParkinglots(dispatch)
        },
        onPark:(orderId, lotId)=>{
            Api.park(orderId, lotId, dispatch)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(choosePark)