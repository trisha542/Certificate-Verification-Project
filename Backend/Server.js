const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const xlsx = require('xlsx');
const Student = require('./models/Student');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: 'uploads/' });

mongoose.connect('mongodb+srv://trishakhullar7_db_user:newtrisha00@cluster0.u52vdqk.mongodb.net/CertificateDB?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("MongoDB Error: ", err));

app.post('/api/upload', upload.single('file'), async (req, res) => {
    try {
        const workbook = xlsx.readFile(req.file.path);
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const data = xlsx.utils.sheet_to_json(sheet);
        
        console.log("Data to be inserted:", data); 
        await Student.insertMany(data); 
        res.status(200).json({ message: "Data uploaded successfully" });
    } catch (error) {
        console.error("DETAILED ERROR:", error.message); 
        res.status(500).json({ error: "Upload failed", details: error.message });
    }
});

app.get('/api/verify/:id', async (req, res) => {
    try {
        const student = await Student.findOne({ certificateId: req.params.id });
        if (!student) return res.status(404).json({ message: "Certificate not found" });
        res.json(student);
    } catch (error) {
        res.status(500).send("Server Error");
    }
});
app.get('/api/students', async (req, res) => {
    try {
        const students = await Student.find(); 
        res.json(students);
    } catch (err) {
        res.status(500).json(err);
    }
});
app.get('/api/search-name/:name', async (req, res) => {
    try {
        const student = await Student.findOne({ 
            studentName: { $regex: req.params.name, $options: 'i' } 
        });
        if (student) {
            res.json(student);
        } else {
            res.status(404).json({ message: "Student not found" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});
app.listen(5000, () => console.log("Server running on port 5000"));