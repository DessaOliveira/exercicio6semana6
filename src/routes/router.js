const express = require('express');
const router = express.Router();

const routerController = require(`../src/controllers/controller.js`)

router.get('/get-all-users/', routerController.getAllUsers);
router.get('/get-user-id/:id', routerController.getUserId);
router.post('/add-user/', routerController.validateLeader, routerController.addUser);
router.post('/delete-user/:id', routerController.deleteUser);


module.exports = router;