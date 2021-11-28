
const routes = {

  'POST /login': {
    path: 'UserController.login'
  },
  'POST /signup': {
    path: 'UserController.signup'
  },

  'POST /addNewMovies': {
    path: 'MoviesController.addNewMovie'
  },

  'GET /getAllMovies': {
    path: 'MoviesController.getAllMovies'
  }


};

module.exports = routes;