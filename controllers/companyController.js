// src/controllers/companyController.js
const Company = require('../models/Company');

exports.getCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.addCompany = async (req, res) => {
  const { name, address, email, nit, code } = req.body;
  try {
    const newCompany = new Company({ name, address, email, nit, code });
    const company = await newCompany.save();
    res.json(company);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateCompany = async (req, res) => {
  const { id } = req.params;
  const { name, address, email, nit, code, isActive } = req.body;
  try {
    const company = await Company.findByIdAndUpdate(
      id,
      { name, address, email, nit, code, isActive },
      { new: true }
    );
    res.json(company);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteCompany = async (req, res) => {
  const { id } = req.params;
  try {
    await Company.findByIdAndDelete(id);
    res.json({ msg: 'Company removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};