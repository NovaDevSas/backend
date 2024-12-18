const verifyRoles = (roles) => {
    return (req, res, next) => {
      const userRoles = req.user.roles; // Asumiendo que req.user contiene la información del usuario autenticado
      const hasRole = roles.some(role => userRoles.includes(role));
      if (!hasRole) {
        return res.status(403).json({ message: 'Acceso denegado' });
      }
      next();
    };
  };
  
  module.exports = verifyRoles;