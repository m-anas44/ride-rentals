const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  model: { type: Number, required: true },
  seat: { type: Number, required: true },
  functionality: { type: String, required: true },
  color: { type: String, required: true },
  overtime: { type: Number, required: true },
  price: { type: Number, required: true },
});

const Service = mongoose.model("Service", ServiceSchema);
module.exports = Service;
