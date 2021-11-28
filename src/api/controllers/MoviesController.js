
const Constants = require(global.APP_ROOT_PATH + '/src/config/constants.js');
const movieRepository = require(Constants.MY_APP_REPOSITORYT_PATH + '/MovieRepository');

const ApiHelper = require(Constants.MY_APP_HELPERS_PATH + '/AppApi.Helpers');

const MoviesController = () => {
  const addNewMovie = async (req, res) => {
    console.log("called");
    let arShareObj = req;
    // ApiHelper.addDeveloperNotes('App Login Ends Points Called!!',arShareObj);
    try {
      let arExcludedKeys = [];
      let arRequestParams = await ApiHelper.parseRequestParams(req, arExcludedKeys);

      await movieRepository.addNewMovie(arRequestParams)
        .then(resData =>
          res.json(
            { status: 200, data: "Data Insert Into Database!" }
          )
        )
        .catch(err => res.json(
          { status: 0, data: "Something goes Rong!" }
        )
        );


    } catch {

    }

  };



  const getAllMovies = async (req, res) => {
    try {
      let arExcludedKeys = [];
      let arRequestParams = await ApiHelper.parseRequestParams(req, arExcludedKeys);
      await movieRepository.getAllMovies(arRequestParams)
        .then(users =>
          res.json(
            {
              status: 200,
              data: users,
            })
        )
        .catch(err => console.log(err));

    } catch {

    }
  };

  return {
    addNewMovie,
    getAllMovies,
  };
};

module.exports = MoviesController;