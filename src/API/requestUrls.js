// const globalUrl = "https://parkinglot-backend.herokuapp.com/api/v1/" //dev
const globalUrl = "http://localhost:8080/api/v1/" //test
const boyId = "3"
export default {
    "employees":globalUrl + "users",
    "login":globalUrl+"login",
    "parkinglots":globalUrl+"parkinglots",
    "parkingLotsDashboard":globalUrl+"parkinglots/dashboard",
    "parkingLotCombineSearch":globalUrl+"parkinglots/combineSearch",
    "nohandleOrders":globalUrl + "orders/nohandle",
    "orders":globalUrl + "orders",
}