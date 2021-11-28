
const Constants = require(global.APP_ROOT_PATH + '/src/config/constants.js');
const repository = require(Constants.MY_APP_REPOSITORYT_PATH + '/User.Repository');

const ApiHelper = require(Constants.MY_APP_HELPERS_PATH + '/AppApi.Helpers');
const bcrypt = require('bcrypt');
const UserController = () => {
  const login = async (req, res) => {
    let arShareObj = req;
    // ApiHelper.addDeveloperNotes('App Login Ends Points Called!!',arShareObj);
    try {
      let arExcludedKeys = [];
      let arRequestParams = await ApiHelper.parseRequestParams(req, arExcludedKeys);

      let user = await repository.checkUser(arRequestParams);
      if (user) {
        console.log("here", user.dataValues.password)
        if (await bcrypt.compare(arRequestParams.password, user.dataValues.password)) {
          res.json(
            { status: 200, isLogin: true }
          )
        } else {
          res.status(400);
          res.json(
            { status: 400, data: "Incorrect Password", isError: 1 }
          )
        }
      } else {
        res.status(400);
        res.json(
          { status: 400, data: "User Not Found!" }
        )
      }

    } catch {

    }

  };



  const signup = async (req, res) => {
    try {

      let arExcludedKeys = [];
      let arRequestParams = await ApiHelper.parseRequestParams(req, arExcludedKeys);
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(arRequestParams.password, salt);
      console.log(hashedPassword);

      let reqObj = {
        email: arRequestParams.email,
        password: hashedPassword
      }
      console.log(reqObj)
      let user = await repository.checkUser(arRequestParams);
      if (user) {
        res.status(400);
        res.json(
          {
            status: 400,
            isUerExist: 1,
            message: "This email address is already registered. Please try logging in."
          })
      } else {
        await repository.signup(reqObj)
          .then(users =>
            res.json(
              {
                status: 200,
                data: users,
              })
          )
          .catch(err => console.log(err));
      }


    } catch {

    }
  };



  return {
    login,
    signup,
  };
};

module.exports = UserController;