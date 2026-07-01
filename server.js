const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const BetaTester = require('./models/BetaTester');

const app = express();

app.use(cors({
  origin: 'https://classhubsonu.vercel.app'
}));
app.use(express.json());


const dbURI = "mongodb+srv://sonu:SONUsingh1607@cluster0.9rwhhlu.mongodb.net/betaTestersDB?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(dbURI)
  .then(() => console.log('MongoDB Atlas Connected Successfully!'))
  .catch(err => console.error('Database Error:', err));
// --------------------------

app.post('/api/register', async (req, res) => {
  try {
    const newTester = new BetaTester(req.body);
    await newTester.save();
    res.status(201).json({ success: true, message: 'Welcome to the Beta Team!' });
  } catch (error) {
    console.error("DEBUG ERROR:", error); 
    res.status(500).json({ success: false, message: 'Server error: ' + error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Backend API running on port ${PORT}`));