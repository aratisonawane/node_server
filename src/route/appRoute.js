const appRoute = require('@forkjs/group-router');
const userController = require('../controller/userController');

appRoute.group('/user', () =>{
    appRoute.post('/create', userController.addUser);
    appRoute.get('/list', userController.fetchUsers);
    appRoute.get('/record/:userId', userController.fetchSingleUser);
});

module.exports = appRoute.router;