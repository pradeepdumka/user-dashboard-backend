const Constants = require(global.APP_ROOT_PATH + '/src/config/constants.js');
const TaskRel = require(Constants.MY_APP_MODEL_PATH + '/TaskRel');

exports.addNewMovie = (arParams) => {
    return new Promise(function (resolve, reject) {
        //arParams.dtCreated = UserModel.sequelize.fn('NOW'); 
        movies.forEach((data) => {
            let obj = {
                "year": data.year,
                "title": data.title,
                "directors": data.directors[0],
                "image_url": data.image_url,
                "plot": data.plot,
                "release_date": data.release_date
            }
            TaskRel.Movie.create(obj)
                .then((result) => {
                    resolve(result.id);
                })
                .catch(function (error) {
                    // console.log("ERROR called" + error);
                    reject(error);
                });
        })

    });
}

exports.getAllMovies = () => {
    return new Promise(function (resolve, reject) {
        TaskRel.Movie.findAll()
            .then((result) => {
                console.log(result.length)
                resolve(result);
            })
            .catch(function (error) {
                reject(error);
            });
    });
}



