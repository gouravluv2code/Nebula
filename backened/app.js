// app.js
const express = require('express');
const app = express();
const PORT = 3000; // Replace with your preferred port number

// Middleware
app.use(express.json());

// Database Configuration
const { Pool } = require('pg');
const pool = new Pool({
  user: 'your_db_user',
  host: 'localhost', // or your database host
  database: 'your_db_name',
  password: 'your_db_password',
  port: 5432 // or your database port
});

// API Endpoints for Hosts

//  
app.get('/api/hosts', async (req, res) => {
    try {
      const { rows } = await pool.query('SELECT * FROM hosts');
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Add a new host
  app.post('/api/hosts', async (req, res) => {
    const { hostName, hostStatus, location, propertyType, about, hostingSince} = req.body;
    try {
      const { rows } = await pool.query(
        'INSERT INTO hosts (host_name, host_status, location, property_type, about, hosting_since) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [hostName, hostStatus, location, propertyType, about, hostingSince]
      );
      res.json(rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Update a host
  app.put('/api/hosts/:id', async (req, res) => {
    const hostId = req.params.id;
    const { hostName, hostStatus, location, propertyType, about, hostingSince, /* Add other host fields as needed */ } = req.body;
    try {
      const { rows } = await pool.query(
        'UPDATE hosts SET host_name = $1, host_status = $2, location = $3, property_type = $4, about = $5, hosting_since = $6 WHERE id = $7 RETURNING *',
        [hostName, hostStatus, location, propertyType, about, hostingSince, hostId]
      );
      res.json(rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Delete a host
  app.delete('/api/hosts/:id', async (req, res) => {
    const hostId = req.params.id;
    try {
      await pool.query('DELETE FROM hosts WHERE id = $1', [hostId]);
      res.json({ message: 'Host deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

// Implement other API endpoints for Properties, Guests, and Bookings
// API Endpoints for Properties

// Get all properties
app.get('/api/properties', async (req, res) => {
    try {
      const { rows } = await pool.query('SELECT * FROM properties');
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Add a new property
  app.post('/api/properties', async (req, res) => {
    const { hostId, propertyName, /* Add other property fields as needed */ } = req.body;
    try {
      const { rows } = await pool.query(
        'INSERT INTO properties (host_id, property_name) VALUES ($1, $2) RETURNING *',
        [hostId, propertyName]
      );
      res.json(rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Update a property
  app.put('/api/properties/:id', async (req, res) => {
    const propertyId = req.params.id;
    const { hostId, propertyName, /* Add other property fields as needed */ } = req.body;
    try {
      const { rows } = await pool.query(
        'UPDATE properties SET host_id = $1, property_name = $2 WHERE id = $3 RETURNING *',
        [hostId, propertyName, propertyId]
      );
      res.json(rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Delete a property
  app.delete('/api/properties/:id', async (req, res) => {
    const propertyId = req.params.id;
    try {
      await pool.query('DELETE FROM properties WHERE id = $1', [propertyId]);
      res.json({ message: 'Property deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
// API Endpoints for Guests

// Get all guests
app.get('/api/guests', async (req, res) => {
    try {
      const { rows } = await pool.query('SELECT * FROM guests');
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Add a new guest
  app.post('/api/guests', async (req, res) => {
    const { guestName, gender, dateOfBirth, /* Add other guest fields as needed */ } = req.body;
    try {
      const { rows } = await pool.query(
        'INSERT INTO guests (guest_name, gender, date_of_birth) VALUES ($1, $2, $3) RETURNING *',
        [guestName, gender, dateOfBirth]
      );
      res.json(rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Update a guest
  app.put('/api/guests/:id', async (req, res) => {
    const guestId = req.params.id;
    const { guestName, gender, dateOfBirth, /* Add other guest fields as needed */ } = req.body;
    try {
      const { rows } = await pool.query(
        'UPDATE guests SET guest_name = $1, gender = $2, date_of_birth = $3 WHERE id = $4 RETURNING *',
        [guestName, gender, dateOfBirth, guestId]
      );
      res.json(rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Delete a guest
  app.delete('/api/guests/:id', async (req, res) => {
    const guestId = req.params.id;
    try {
      await pool.query('DELETE FROM guests WHERE id = $1', [guestId]);
      res.json({ message: 'Guest deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
// API Endpoints for Bookings

// Get all bookings
app.get('/api/bookings', async (req, res) => {
    try {
      const { rows } = await pool.query('SELECT * FROM bookings');
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Add a new booking
  app.post('/api/bookings', async (req, res) => {
    const { propertyId, guestId, checkInDate, checkOutDate, /* Add other booking fields as needed */ } = req.body;
    try {
      const { rows } = await pool.query(
        'INSERT INTO bookings (property_id, guest_id, check_in_date, check_out_date) VALUES ($1, $2, $3, $4) RETURNING *',
        [propertyId, guestId, checkInDate, checkOutDate]
      );
      res.json(rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Update a booking
  app.put('/api/bookings/:id', async (req, res) => {
    const bookingId = req.params.id;
    const { propertyId, guestId, checkInDate, checkOutDate, /* Add other booking fields as needed */ } = req.body;
    try {
      const { rows } = await pool.query(
        'UPDATE bookings SET property_id = $1, guest_id = $2, check_in_date = $3, check_out_date = $4 WHERE id = $5 RETURNING *',
        [propertyId, guestId, checkInDate, checkOutDate, bookingId]
      );
      res.json(rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Delete a booking
  app.delete('/api/bookings/:id', async (req, res) => {
    const bookingId = req.params.id;
    try {
      await pool.query('DELETE FROM bookings WHERE id = $1', [bookingId]);
      res.json({ message: 'Booking deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
      
// Start the server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
