const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  secondName: { type: String, required: true },
  lastName: { type: String, required: true },
  secondLastName: { type: String, required: true },
  documentType: { type: String, required: true },
  documentNumber: { type: String, required: true },
  birthDate: { type: Date, required: true },
  birthCity: { type: String, required: true },
  company: { type: String, required: true },
  activity: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  phones: { type: [String], required: true },
  department: { type: String, required: true },
  residenceCity: { type: String, required: true },
  maritalStatus: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true },
  profession: { type: String, required: true },
  registrationDate: { type: Date, required: true },
  educationLevel: { type: String, required: true },
  EPS: { type: String, required: true },
  ARL: { type: String, required: true },
  userType: { type: String, required: true },
  affiliateType: { type: String, required: true },
  residenceZone: { type: String, required: true },
  responsiblePersonData: { type: Object, required: true },
  companionData: { type: Object, required: true },
});

module.exports = mongoose.model('Client', clientSchema);