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
      <div className="border-b mb-5 flex">
        <h2 className="text-2xl font-bold p-4">All Services</h2>
        <div className="w-full md:w-1/3 px-3 flex items-center gap-x-2">
          <label
            className="block mb-2 uppercase tracking-wide text-gray-700 text-xs font-bold"
            htmlFor=""
          >
            Type
          </label>
          <select
            id=""
            className="appearance-none block mb-2 w-full bg-gray-200 border-0 border-b-2 bg-transparent border-gray-200 text-gray-700 px-4 py-1 leading-tight focus:outline-none focus:border-transparent focus:border-b focus:border-gray-200"
          >
            <option>skjkhvdfl</option>
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
                  <p>{item.func}</p>
                  <p>{item.price}</p>
                </div>
              )
            })
          }
        </div>
    </section>
  );
};

export default Services;
