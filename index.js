const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const companyRoutes = require('./routes/companyRoutes'); // Importar las rutas de empresas

const app = express();
const port = 3001;

// Connect to database
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined')); // Usar morgan para logging

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', userRoutes);
app.use('/api', companyRoutes); // Usar las rutas de empresas

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});