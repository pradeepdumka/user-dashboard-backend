
const Constants = require(global.APP_ROOT_PATH + '/src/config/constants.js');
const TaskRel = require(Constants.MY_APP_MODEL_PATH + '/TaskRel');



exports.signup = (arParams) => {
    return new Promise(function (resolve, reject) {
        //arParams.dtCreated = UserModel.sequelize.fn('NOW'); 
        console.log(arParams);
        let obj = { ...arParams };
        console.log(obj);
        TaskRel.User.create(obj)
            .then((result) => {
                resolve(result.id);
            })
            .catch(function (error) {
                reject(error);
            });
    });
}

exports.checkUser = (repParms) => {
    return new Promise(function (resolve, reject) {
        TaskRel.User.findOne(
            { where: { email: repParms.email } }
        )
            .then((result) => {
                resolve(result);
            })
            .catch(function (error) {
                reject(error);
            });
    });
}






