const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// ROUTES
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);

app.get('/', (req, res) => res.send('Hai Events Backend API running'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.use(express.json());      // Parses JSON bodies
app.use(express.urlencoded({ extended: true })); // Parses form bodies (optional)
