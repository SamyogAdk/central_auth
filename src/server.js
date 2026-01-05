const express = require("express");
const cors = require("cors");
const pool = require('./infrastructure/db');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM test_auth')
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

const PORT = process.env.PORT || 5000; //Use from env variable if available

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

