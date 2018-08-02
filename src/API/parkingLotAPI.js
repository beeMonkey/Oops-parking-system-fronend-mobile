import axios from "axios"
import * as actions from '../actions'
import requestUrls from "./requestUrls"
import Access_token from "../constants/Access_Token"
axios.defaults.headers.common['authorization'] = Access_token;
export default {
    "getAllOrders": (dispatch) => axios.get(requestUrls.orders)
        .then((res) => {
            dispatch(actions.allOrders(res.data))
        })
        .catch((error) => {
            console.log(error);
        }),
    "getBoyOrders":(dispatch) => 
    axios.get(requestUrls.boyOrders)
    .then((res) => {
        dispatch(actions.allOrders(res.data))
    })
    .catch((error) => {
        console.log(error);
    }),
}