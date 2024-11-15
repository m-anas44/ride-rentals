const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});

const uri = `mongodb+srv://manasansari1438:3h2dTwHiBARX8R7Q@cluster47.hui9pwa.mongodb.net/test`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

const serviceRoutes = require("./routes/ServicesRoute");
const Service = require("./models/ServiceModel");
app.use("/api/services", serviceRoutes);

app.post("/api/services", async (req, res) => {
  const service = new Service(req.body);
  const result = await service.save();
  res.send(result);
});



