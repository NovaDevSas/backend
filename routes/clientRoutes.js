const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const authMiddleware = require('../middleware/authMiddleware');
const verifyRoles = require('../middleware/verifyRoles');

router.get('/clients', authMiddleware, verifyRoles(['SuperAdministrador', 'Administrador']), clientController.getClients);
router.post('/clients', authMiddleware, verifyRoles(['SuperAdministrador', 'Administrador']), clientController.addClient);
router.put('/clients/:id', authMiddleware, verifyRoles(['SuperAdministrador', 'Administrador']), clientController.updateClient);
router.delete('/clients/:id', authMiddleware, verifyRoles(['SuperAdministrador']), clientController.deleteClient);

module.exports = router;