// const globalUrl = "https://parkinglot-backend.herokuapp.com/api/v1/" //dev
const globalUrl = "http://10.222.232.147:8080/api/v1/" //test
export default {
    "employees":globalUrl + "users",
    "login":globalUrl+"login",
    "parkinglots":globalUrl+"parkinglots",
    "parkingLotsDashboard":globalUrl+"parkinglots/dashboard",
    "parkingLotCombineSearch":globalUrl+"parkinglots/combineSearch",
    "nohandleOrders":globalUrl + "orders/nohandle",
    "orders":globalUrl + "orders",
}