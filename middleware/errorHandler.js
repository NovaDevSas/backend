// filepath: /c:/Users/USUARIO/Desktop/Nova/chtgpt/IPS/backend/middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
  };
  
  module.exports = errorHandler;