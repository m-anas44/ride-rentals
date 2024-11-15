const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  model: { type: String, required: true },
  seat: { type: String, required: true },
  functionality: { type: String, required: true },
  color: { type: String, required: true },
  overtime: { type: String, required: true },
  price: { type: String, required: true },
});

const Service = mongoose.model("Service", ServiceSchema);
module.exports = Service;
