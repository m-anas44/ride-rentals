import React, { useEffect, useState } from "react";

const Services = () => {
  const [servies, setServices] = useState([])
  useEffect(()=>{
    const fetchServices = async() => {
      try{
        const res = await fetch('http://localhost:5000/api/services')
        const data = await res.json()
        setServices(data)
      }
      catch(err){
        console.log('failed to fetch services',err)
      }
    }
    fetchServices()
  }, [])
  return (
    <section className="container mx-auto">
      <div className="border-b mb-5 flex justify-between">
        <h2 className="text-2xl font-bold p-4">All Services</h2>
        <div className="w-full md:w-1/3 px-3 flex justify-end items-center">
          <label
            className="block font-medium tracking-wide text-gray-700 text-sm border border-r-0 border-gray-700 p-0.5 px-2 rounded rounded-r-none"
            htmlFor=""
          >
            Filter
          </label>
          <select
            id=""
            className="p-0.5 rounded rounded-l-none pl-2 text-gray-700 text-sm"
          >
            <option value={`all`}>All</option>
            <option value={`budget`}>Budget</option>
            <option value={`standard`}>Standard</option>
            <option value={`luxury`}>Luxury</option>
            <option value={`suv`}>SUV</option>
            <option value={`vans-coaster`}>Vans & Costers</option>
          </select>
        </div>

      </div>
        <div>
          <h2>services</h2>
          {
            servies.map((item)=>{
              return (
                <div key={item._id}>
                  <h2>{item.name}</h2>
                  <p>{item.age}</p>
                </div>
              )
            })
          }
        </div>
    </section>
  );
};

export default Services;
