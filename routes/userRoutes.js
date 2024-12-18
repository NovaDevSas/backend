const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const verifyRoles = require('../middleware/verifyRoles');

router.get('/users', verifyRoles(['Administrador', 'SuperAdministrador']), userController.getUsers);
router.post('/users', verifyRoles(['Administrador', 'SuperAdministrador']), userController.createUser);
router.put('/users/:id', verifyRoles(['Administrador', 'SuperAdministrador']), userController.updateUser);
router.delete('/users/:id', verifyRoles(['SuperAdministrador']), userController.deleteUser);

module.exports = router;