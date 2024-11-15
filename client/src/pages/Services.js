import React, { useEffect, useState, useMemo } from "react";
import VehicleCard from "../components/VehicleCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [selectedType, setSelectedType] = useState("all"); // Initial selected type
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/services");
        const data = await res.json();
        setServices(data);
      } catch (err) {
        console.log("failed to fetch services", err);
      }
    };
    fetchServices();
  }, []);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase()); // Search term to lowercase
  };

  const filteredServices = useMemo(() => {
    let filteredData = services;

    // Apply type filter if selectedType is not "all"
    if (selectedType !== "all") {
      filteredData = filteredData.filter(
        (service) => service.type.toLowerCase() === selectedType.toLowerCase()
      );
    }

    // Apply search filter if searchTerm is not empty
    if (searchTerm) {
      filteredData = filteredData.filter((service) =>
        service.name.toLowerCase().includes(searchTerm)
      );
    }

    return filteredData.length > 0 ? filteredData : [];
  }, [services, selectedType, searchTerm]);

  return (
    <section className="lg:container mx-auto p-2 mb-3">
      <div className="mb-5">
        <h2 className="text-2xl font-bold p-4 mt-4">All Services</h2>
        <div className="flex gap-2">
          <div className=" px-3 flex items-center bg-gray-100 rounded">
            <label
              className="w-full bg-gray-800 p-1 text-center text-gray-100 outline-none focus:outline-none border-gray-700 rounded"
              htmlFor=""
            >
              Filter
            </label>
            <select
              id=""
              className="w-full border-none bg-transparent p-1 px-3 text-gray-600 outline-none focus:outline-none rounded font-medium "
              onChange={handleTypeChange}
            >
              <option value="all">All</option>
              <option value="budget">Budget</option>
              <option value="standard">Standard</option>
              <option value="luxury">Luxury</option>
              <option value="suv">SUV</option>
              <option value="vans">Vans</option>
            </select>
          </div>
          <div className="flex items-center flex-grow">
            <div className="flex w-full rounded bg-gray-100">
              <input
                className=" w-full border-none bg-transparent px-4 text-gray-400 outline-none focus:outline-none "
                type="search"
                name="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button
                type="submit"
                className="m-2 rounded bg-gray-800 px-4 py-2 text-white"
              >
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  style={{ enableBackground: "new 0 0 56.966 56.966" }}
                  xmlSpace="preserve"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-5">
        {filteredServices.length > 0 ? (
          filteredServices.map(
            (
              value // Render cards if services found
            ) => (
              <div key={value._id}>
                <VehicleCard
                  name={value.name}
                  type={value.type}
                  model={value.model}
                  seat={value.seat}
                  functionality={value.functionality}
                  color={value.color}
                  overtime={value.overtime}
                  price={value.price}
                />
              </div>
            )
          )
        ) : (
          // Show message if no services found
          <p className="text-center text-gray-500">
            No services found for this type.
          </p>
        )}
      </div>
    </section>
  );
};

export default Services;
