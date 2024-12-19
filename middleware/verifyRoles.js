const verifyRoles = (roles) => {
  return (req, res, next) => {
    if (!req.user || !req.user.roles) {
      return res.status(403).json({ message: 'Acceso denegado' });
    }
    const userRoles = req.user.roles;
    const hasRole = roles.some(role => userRoles.includes(role));
    if (!hasRole) {
      return res.status(403).json({ message: 'Acceso denegado' });
    }
    next();
  };
};

module.exports = verifyRoles;