import axios from "axios"
import * as actions from '../actions'
import requestUrls from "./requestUrls"
import {Toast} from 'antd-mobile';
import Access_token from "../constants/Access_Token"
import {Modal} from "antd-mobile/lib/index";
const alert = Modal.alert
axios.defaults.headers.common['authorization'] = Access_token;
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
        axios.patch(requestUrls.orders + "/" + id + "?boyId=" + localStorage.getItem("id"))
        .then((res) => {
            Toast.success("抢单成功",1);
            dispatch(actions.patchOrder(res.data))
        })
        .catch((error) => {
            console.log(error);
        })
    },


    "getBoyParkinglots": (dispatch) =>
        axios.get(`${requestUrls.employees}/${localStorage.getItem("id")}/parkinglots`)
            .then(res => {
                console.log("-------" + JSON.stringify(res))
                dispatch(actions.allParkingLots(res.data))
            })
            .catch(error => {
                Toast.fail("您没有停车场",1)
                console.log(error)
            }),

    "park": (orderId, lotId, dispatch) => {
        console.log("orderId:" + orderId);
        console.log("lotId:" + lotId);
        axios.patch(`${requestUrls.orders}/${orderId}/park?parkingLotId=${lotId}`)
            .then(res => {
                console.log(res.data)
                if (res.status == 200) {
                    console.log(res.data)
                    console.log(this)
                    this.a.getBoyOrders(dispatch);
                    this.a.getBoyParkinglots(dispatch);

                }
            })
            .catch(error => {
                console.log(error)
            })
    },
    "unParkCar": (orderId, parkingLotId, dispatch) => {
        console.log(requestUrls.parkinglots + "/" + orderId + "/park/" + parkingLotId);
        axios.delete(requestUrls.parkinglots + "/" + orderId + "/park/" + parkingLotId)
            .then((res) => {
                console.log(res.data);
                if (res.status == 204) {
                    alert("取车成功")
                    this.a.getBoyOrders(dispatch);
                }
            })
            .catch((error) => {
                console.log(error);
                if (error.status != 403) {
                    alert("取车失败")
                }
            })
    },
    "GetFinishOrdersByBoyId":(dispatch)=>{
        axios.get(`${requestUrls.orders}/complete/${localStorage.getItem("id")}`)
            .then((res) => {
                dispatch(actions.allOrders(res.data))
            })
            .catch((error) => {
                console.log(error);
            })
    },
    "isBoyParkinglotsFull":(id,dispatch)=>
        axios.get(`${requestUrls.employees}/${localStorage.getItem("id")}/parkinglots/isFull`)
        .then(res=>{
            console.log("-------"+JSON.stringify(res))
            //this.patchOrderStatus(id,dispatch)
            this.a.patchOrderStatus(id,dispatch);
        })
        .catch(error=>{
            Toast.success("停车场已满，无法抢单",1);
            console.log(error)
        }),
}
