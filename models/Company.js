// src/models/Company.js
const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  nit: { type: String, required: true },
  code: { type: String, required: true },
  isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('Company', CompanySchema);