const express = require("express");
const router = express.Router();
const {
  createReservation,
  getAllReservations,
  getReservationById,
  deleteReservationById,
} = require("../controllers/reservationController");

// Create a new reservation
router.post("/", createReservation);

// Get all reservations
router.get("/", getAllReservations);

// Get a single reservation by ID
router.get("/:id", getReservationById);


// Delete a reservation by ID
router.delete("/:id", deleteReservationById);

module.exports = router;
