
const enviornment = process.env.NODE_ENV;
const arConstant = [];
//console.log("EN",enviornment)
//console.log(global.APP_ROOT_PATH)
if (enviornment == 'local') {
    arConstant.MY_APP_DATABASE = 'task-sveltetech',
        arConstant.MY_APP_DATABASE_USER = 'root',
        arConstant.MY_APP_DATABASE_PASSWORD = '',
        arConstant.MY_APP_DATABASE_HOST = 'localhost'
} else if (enviornment == 'production') {
    arConstant.MY_APP_DATABASE = 'task-sveltetech',
        arConstant.MY_APP_DATABASE_USER = 'root',
        arConstant.MY_APP_DATABASE_PASSWORD = '',
        arConstant.MY_APP_DATABASE_HOST = 'localhost'
} else {
    arConstant.MY_APP_DATABASE = 'task-sveltetech',
        arConstant.MY_APP_DATABASE_USER = 'root',
        arConstant.MY_APP_DATABASE_PASSWORD = '',
        arConstant.MY_APP_DATABASE_HOST = 'localhost'
}

arConstant.MY_APP_ROOT_PATH = global.APP_ROOT_PATH;
arConstant.MY_APP_ROUTER_PATH = arConstant.MY_APP_ROOT_PATH + '/routes';
arConstant.MY_APP_SRC_PATH = arConstant.MY_APP_ROOT_PATH + '/src';
arConstant.MY_APP_CONFIG_PATH = arConstant.MY_APP_SRC_PATH + '/config';
arConstant.MY_APP_API_PATH = arConstant.MY_APP_SRC_PATH + '/api';
arConstant.MY_APP_CONTROLLER_PATH = arConstant.MY_APP_API_PATH + '/controllers';
arConstant.MY_APP_HELPERS_PATH = arConstant.MY_APP_API_PATH + '/helpers';
arConstant.MY_APP_MODEL_PATH = arConstant.MY_APP_API_PATH + '/model';
arConstant.MY_APP_REPOSITORYT_PATH = arConstant.MY_APP_API_PATH + '/repository';
arConstant.MY_APP_SERVICES_PATH = arConstant.MY_APP_API_PATH + '/services';


module.exports = arConstant;