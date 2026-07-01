const mongoose = require('mongoose');

const testerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  whatsapp: { type: String, required: true },
  personalEmail: { type: String, required: true },
  collegeEmail: { type: String, required: true },
  collegeId: { type: String, required: true },
  course: { type: String, required: true },
  year: { type: String, required: true },    
  batch: { type: String, required: true },   
  section: { type: String, required: true },
  session: { type: String, required: true },
  gender: { type: String, required: true },
  terms: { type: Boolean, required: true }   
}, { timestamps: true });

module.exports = mongoose.model('BetaTester', testerSchema);