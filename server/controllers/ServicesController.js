const express = require("express");
const Services = require("../models/ServiceModel");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

exports.getAllServices = async (req, res) => {
  try {
    const services = await Services.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// app.use(cors);
// app.use(bodyParser.json());

// app.post("/api/services", async (req, res) => {
//   const { name, type, model, seat, functionality, color, overtime, price } =
//     req.body;

//   const addingNewService = new Services({
//     name,
//     type,
//     model,
//     seat,
//     functionality,
//     color,
//     overtime,
//     price,
//   });

//   try {
//     const savedService = await addingNewService.save();
//     res.status(201).json(savedService);
//   } catch (error) {
//     console.error('Error creating service:', err);
//     res.status(500).json({ message: error.message });
//   }
// });

exports.addNewService = async (req, res) => {
  let { name, type, model, seat, functionality, color, overtime, price } =
    req.body;
  const serviceData = {
    name,
    type,
    model,
    seat,
    functionality,
    color,
    overtime,
    price,
  };

  const creatingService = new Service(serviceData);

  try {
    const newService = await creatingService.save();
    res.status(201).json(newService);
    console.log(newService)
  } catch (error) {
    console.log("error in creating new service", error);
    res.status(500).json({ message: error.message });
  }
};
