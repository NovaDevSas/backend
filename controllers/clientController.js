const Client = require('../models/Client');

exports.getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addClient = async (req, res) => {
  const {
    name,
    secondName,
    lastName,
    secondLastName,
    documentType,
    documentNumber,
    birthDate,
    birthCity,
    company,
    activity,
    address,
    city,
    phones,
    department,
    residenceCity,
    maritalStatus,
    gender,
    email,
    profession,
    registrationDate,
    educationLevel,
    eps,
    arl,
    userType,
    affiliateType,
    residenceZone,
    responsiblePersonData,
    companionData,
  } = req.body;

  try {
    const newClient = new Client({
      name,
      secondName,
      lastName,
      secondLastName,
      documentType,
      documentNumber,
      birthDate,
      birthCity,
      company,
      activity,
      address,
      city,
      phones,
      department,
      residenceCity,
      maritalStatus,
      gender,
      email,
      profession,
      registrationDate,
      educationLevel,
      eps,
      arl,
      userType,
      affiliateType,
      residenceZone,
      responsiblePersonData,
      companionData,
    });

    const client = await newClient.save();
    res.status(201).json(client);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateClient = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const client = await Client.findByIdAndUpdate(id, updateData, { new: true });
    res.json(client);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.deleteClient = async (req, res) => {
  const { id } = req.params;

  try {
    await Client.findByIdAndDelete(id);
    res.json({ message: 'Client removed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};