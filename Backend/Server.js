const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const xlsx = require('xlsx');
const path = require('path');
const Student = require('./models/Student');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
// This line allows your frontend to see images/files in the uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer Setup for Excel uploads
const upload = multer({ dest: 'uploads/' });

// MongoDB Connection
mongoose.connect('mongodb+srv://trishakhullar7_db_user:newtrisha00@cluster0.u52vdqk.mongodb.net/CertificateDB?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.log("❌ MongoDB Error: ", err));

// --- API ROUTES ---

// 1. Upload Excel and Save to DB
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

// 2. Verify Certificate by ID
app.get('/api/verify/:id', async (req, res) => {
    try {
        const student = await Student.findOne({ certificateId: req.params.id });
        if (!student) return res.status(404).json({ message: "Certificate not found" });
        res.json(student);
    } catch (error) {
        res.status(500).send("Server Error");
    }
});

// 3. Get all students
app.get('/api/students', async (req, res) => {
    try {
        const students = await Student.find(); 
        res.json(students);
    } catch (err) {
        res.status(500).json(err);
    }
});

// 4. Search by Name
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

// 5. Basic Root Route
app.get('/', (req, res) => {
    res.send("Certificate Verification API is running...");
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));