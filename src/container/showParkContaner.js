import { connect } from 'react-redux'
import ShowPark from "../components/showParking"
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPark)