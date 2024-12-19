const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const verifyRoles = require('../middleware/verifyRoles');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/users', authMiddleware, verifyRoles(['SuperAdministrador', 'Administrador']), userController.getUsers);
router.post('/users', authMiddleware, verifyRoles(['SuperAdministrador', 'Administrador']), userController.createUser);
router.put('/users/:id', authMiddleware, verifyRoles(['SuperAdministrador', 'Administrador']), userController.updateUser);
router.delete('/users/:id', authMiddleware, verifyRoles(['SuperAdministrador']), userController.deleteUser);

module.exports = router;