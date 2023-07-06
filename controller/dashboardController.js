
const dashboardProvider = require("../provider/dashboardProvider");



let getVendors = async (req,res) => {
    try {
        let response = await dashboardProvider.getUsersByRole('vendor');
        return _handleResponse(req, res, null, response);
    } catch (e) {
        console.error("ERROR ::: dashboardController -> getVendors :::" , e);
        return _handleResponse(req, res, e);
    }
}
let getAdmins = async (req,res) => {
    try {
        let response = await dashboardProvider.getUsersByRole('admin');
        return _handleResponse(req, res, null, response);
    } catch (e) {
        console.error("ERROR ::: dashboardController -> getAdmins :::" , e);
        return _handleResponse(req, res, e);
    }
}
let getUsers = async (req,res) => {
    try {
        let response = await dashboardProvider.getUsersByRole('user');
        return _handleResponse(req, res, null, response);
    } catch (e) {
        console.error("ERROR ::: dashboardController -> getUsers :::" , e);
        return _handleResponse(req, res, e);
    }
}

module.exports = {
    getVendors,getAdmins,getUsers
}