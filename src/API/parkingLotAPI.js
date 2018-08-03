import axios from "axios"
import * as actions from '../actions'
import requestUrls from "./requestUrls"
import {Toast} from 'antd-mobile';
import Access_token from "../constants/Access_Token"
axios.defaults.headers.common['authorization'] = Access_token;
const boyId = 3
export default {
    "getAllOrders": (dispatch) => {
        axios.defaults.headers.common['authorization'] = localStorage.getItem("access_token")
        axios.get(requestUrls.nohandleOrders)
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
            Toast.success("抢单成功");
            dispatch(actions.patchOrder(res.data))
        })
        .catch((error) => {
            console.log(error);
        })
    },


    "getBoyParkinglots":(dispatch)=>
        axios.get(requestUrls.boyParkingLots)
        .then(res=>{
            console.log("-------"+JSON.stringify(res))
            dispatch(actions.allParkingLots(res.data))
        })
        .catch(error=>{
            console.log(error)
        }),
    
    "park":(orderId, lotId, dispatch)=>{
    axios.patch(`${requestUrls.orders}/${orderId}/park?parkingLotId=${lotId}`)
        .then(res=>{
            if(res.status == 200){
                axios.put(`${requestUrls.parkinglots}/${lotId}/park`)
                .then(res=>{
                    console.log(res.data)
                    dispatch(actions.modifyParkinglot(res.data))
                })
                .catch(error=>{
                })
            }
        })
        .catch(error=>{
        })
    },
    "unParkCar":(orderId,parkingLotId,dispatch)=> {
        console.log(requestUrls.parkinglots + "/" + orderId + "/park/" + parkingLotId);
        axios.delete(requestUrls.parkinglots + "/" + orderId + "/park/" + parkingLotId)
            .then((res) => {
                console.log(res.data);
                axios.get(requestUrls.boyOrders)
                    .then((res) => {
                        dispatch(actions.allOrders(res.data))
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            })
            .catch((error) => {
                console.log(error);
            })
    }
}
