const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { email, username, password } = req.body;
  if (!email || !username || !password) {
    return res.status(400).send('Todos los campos son obligatorios.');
  }
  try {
    // Verificar si el usuario ya existe
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send('User already exists');
    }

    // Verificar si el username ya existe
    user = await User.findOne({ username });
    if (user) {
      return res.status(400).send('Username already exists');
    }

    // Crear un nuevo usuario
    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ email, username, password: hashedPassword });
    await user.save();

    // Crear y devolver un token
    const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
    res.status(201).send({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send('User not found');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send('Invalid credentials');
    }
    const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
    res.send({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send('User not found');
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();
    res.send('Password reset');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

