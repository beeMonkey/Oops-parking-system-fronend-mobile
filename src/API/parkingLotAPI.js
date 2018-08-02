import axios from "axios"
import * as actions from '../actions'
import requestUrls from "./requestUrls"
import Access_token from "../constants/Access_Token"
axios.defaults.headers.common['authorization'] = Access_token;
export default {
    "getAllOrders": (dispatch) => axios.get(requestUrls.nohandleOrders)
        .then((res) => {
            console.log(res.data)
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
    "patchOrderStatus":(id,boyId)=> axios.patch(requestUrls.orders+"/"+id+"?boyId="+boyId)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((error) => {
            console.log(error);
        }),
}