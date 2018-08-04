import { connect } from 'react-redux'
import theHistory from "../components/theHistory"
import Api from "../API/parkingLotAPI"
const mapStateToProps = (state, ownProps) => {
    return {
        ordersList: state.orderReducers
    }

}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        GetFinishOrdersByBoyId:()=>{
            Api.GetFinishOrdersByBoyId(dispatch)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(theHistory)