import axios from "axios"
import * as actions from '../actions'
import requestUrls from "./requestUrls"

import Access_token from "../constants/Access_Token"
axios.defaults.headers.common['authorization'] = Access_token;
const boyId = 1
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
    },
    "getBoyOrders": (dispatch) => {
        axios.get(requestUrls.boyOrders)
            .then((res) => {
                dispatch(actions.allOrders(res.data))
            })
            .catch((error) => {
                console.log(error);
            })
    },
    "patchOrderStatus": (id, dispatch) => {
        axios.patch(requestUrls.orders + "/" + id + "?boyId=" + boyId)
        .then((res) => {
            dispatch(actions.patchOrder(res.data))
        })
    }
}