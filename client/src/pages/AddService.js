import React, { useState } from "react";
import MiniNavBar from "../layout/MiniNavBar";
import { ServiceData } from "../mockData/ServiceFormData";
import image from "../assets/corolla.jpg";
const AddService = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [model, setModel] = useState("");
  const [seat, setSeat] = useState("");
  const [functionality, setFunctionality] = useState("");
  const [color, setColor] = useState("");
  const [overtime, setOvertime] = useState("");
  const [price, setPrice] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name,
      type,
      model,
      seat,
      functionality,
      color,
      overtime,
      price,
    };

    try {
      const response = await fetch("http://localhost:5000/api/services", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      const jsonData = await response.json();
      localStorage.setItem("service", JSON.stringify(jsonData));
      console.log(jsonData);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("add service error", error);
      // Handle errors (e.g., show an error message to the user)
    }
  };

  return (
    <section className="container mx-auto">
      <MiniNavBar />
      <h2 className="text-2xl font-bold p-4">Add New Service</h2>
      <div className="flex flex-col md:flex-row gap-8 mb-3">
        <div className="flex flex-col gap-3 p-2">
          <img
            src={image}
            alt="corolla"
            className="w-full md:w-64 border border-gray-300 rounded-lg"
          />
          <button
            type="button"
            className="text-gray-900 w-full bg-white border tracking-wider border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Select
          </button>
        </div>
        <form className="w-full p-2" onSubmit={handleFormSubmit}>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/3 px-3">
              <label
                className="block mb-2 uppercase tracking-wide text-gray-700 text-xs font-bold"
                htmlFor="grid-car-name"
              >
                Car Name
              </label>
              <input
                className="appearance-none block mb-2 w-full bg-gray-200 border border-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="grid-car-name"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. corolla"
                required
              />
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label
                className="block mb-2 uppercase tracking-wide text-gray-700 text-xs font-bold"
                htmlFor="grid-type-name"
              >
                Type
              </label>
              <select
                id="grid-type-name"
                value={type}
                name="type"
                onChange={(e) => setType(e.target.value)}
                className="appearance-none block mb-2 w-full bg-gray-200 border border-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              >
                {ServiceData.types.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label
                className="block mb-2 uppercase tracking-wide text-gray-700 text-xs font-bold"
                htmlFor="grid-model-name"
              >
                Car Model
              </label>
              <input
                className="appearance-none block mb-2 w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-model-name"
                name="model"
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="e.g. 2018"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/3 px-3">
              <label
                className="block mb-2 uppercase tracking-wide text-gray-700 text-xs font-bold"
                htmlFor="grid-seats-name"
              >
                Seat
              </label>
              <select
                id="grid-seats-name"
                value={seat}
                name="seat"
                onChange={(e) => setSeat(e.target.value)}
                className="appearance-none block mb-2 w-full bg-gray-200 border border-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              >
                {ServiceData.seats.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label
                className="block mb-2 uppercase tracking-wide text-gray-700 text-xs font-bold"
                htmlFor="grid-functionality"
              >
                Functionality
              </label>
              <select
                id="grid-functionality"
                value={functionality}
                name="functionality"
                onChange={(e) => setFunctionality(e.target.value)}
                className="appearance-none block mb-2 w-full bg-gray-200 border border-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              >
                {ServiceData.functionality.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label
                className="block mb-2 uppercase tracking-wide text-gray-700 text-xs font-bold"
                htmlFor="grid-color-name"
              >
                Color
              </label>
              <select
                id="grid-color-name"
                value={color}
                name="color"
                onChange={(e) => setColor(e.target.value)}
                className="appearance-none block mb-2 w-full bg-gray-200 border border-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              >
                {ServiceData.colors.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3">
              <label
                className="block mb-2 uppercase tracking-wide text-gray-700 text-xs font-bold"
                htmlFor="grid-overtime"
              >
                Overtime <small>per hour</small>
              </label>
              <select
                id="grid-overtime"
                onChange={(e) => setOvertime(e.target.value)}
                value={overtime}
                name="overtime"
                className="appearance-none block mb-2 w-full bg-gray-200 border border-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              >
                {ServiceData.overtimeRS.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label
                className="block mb-2 uppercase tracking-wide text-gray-700 text-xs font-bold"
                htmlFor="grid-price"
              >
                Price <small>in PKR</small>
              </label>
              <input
                className="appearance-none block mb-2 w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-price"
                value={price}
                name="price"
                type="text"
                onChange={(e) => setPrice(e.target.value)}
                placeholder="e.g. 3500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full md:w-auto focus:outline-none text-white bg-gray-900 hover:bg-gray-800 font-medium rounded-lg text-sm px-8 py-2.5"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddService;
