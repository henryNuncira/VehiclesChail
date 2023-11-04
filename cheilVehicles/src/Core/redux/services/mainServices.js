import { axios_vehicles } from "../../../Core/Api/axios";

const mdlP = {
    loginURL: "/signIn?email=",
    getDataURL: "/getVehicles",
    logoutURL: "/SignOut",
    // fetchTasksURL: "mdl07/dashBoard/summaryTask",
};

export const getDataService = async => {
    return axios_vehicles.get(mdlP.getDataURL);
};

export const signInUserService = async payload => {
    return axios_vehicles.post(mdlP.loginURL+payload.email+"&password="+payload.password);
};

export const signOutUserService = async payload => {
    return axios_vehicles.post(mdlP.logoutURL);
};