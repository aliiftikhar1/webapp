
const { DbHelper } = require('../helper/DB/dbHelper');
const { DbHelperUser } = require('../helper/DB/dbHelperUser');


//create instance of
const dbInstance = new DbHelper();
const dbInstanceUser = new DbHelperUser();

let getUsersByRole = async (role) => {
    try {
        //check if user exist with same email
        let users = await dbInstanceUser.getUserByRole(role); 
     console.log(users);    
        return users  
    } catch (e) {
        console.error('ERROR ::: dashboardProvider -> getUsersData ::: ', e);
        throw e;
    }
};

module.exports = {
    getUsersByRole

};
