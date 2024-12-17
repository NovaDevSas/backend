const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.getUsers); // Ruta para obtener la lista de usuarios
router.post('/users', userController.createUser); // Ruta para crear un nuevo usuario
router.put('/users/:id', userController.updateUser); // Ruta para actualizar un usuario
router.delete('/users/:id', userController.deleteUser); // Ruta para eliminar un usuario

module.exports = router;