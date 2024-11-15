const Services = require("../models/ServiceModel");

exports.getAllServices = async (req, res) => {
  try {
    const services = await Services.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// exports.addNewService = async (req, res) => {
//   let { name, type, model, seat, functionality, color, overtime, price } =
//     req.body;
//   const serviceData = {
//     name,
//     type,
//     model,
//     seat,
//     functionality,
//     color,
//     overtime,
//     price,
//   };

//   const creatingService = new Service(serviceData);
//   console.log("creating service: ", creatingService);
//   try {
//     const newService = await creatingService.save();
//     res.status(201).json(newService);
//     console.log(newService);
//   } catch (error) {
//     console.log("error in creating new service", error);
//     res.status(500).json({ message: error.message });
//   }
// };
