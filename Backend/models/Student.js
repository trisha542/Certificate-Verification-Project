const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    certificateId: { type: String, required: true, unique: true },
    studentName: { type: String, required: true },
    internshipDomain: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true }
});

module.exports = mongoose.model('Student', studentSchema);