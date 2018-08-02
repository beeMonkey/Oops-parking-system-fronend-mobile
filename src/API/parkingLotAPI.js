import axios from "axios"
import * as actions from '../actions'
import requestUrls from "./requestUrls"

export default {
    "getAllOrders": (dispatch) => {
        axios.defaults.headers.common['authorization'] = localStorage.getItem("access_token")
        axios.get(requestUrls.orders)
        .then((res) => {
            console.log(res.data)
            dispatch(actions.allOrders(res.data))
        })
        .catch((error) => {
            console.log(error);
        })
    }
}