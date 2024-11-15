import React, { useState, useEffect } from "react";
import VehicleCard from "./VehicleCard";

const VehicleList = () => {
  const [servies, setServices] = useState([]);
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/services");
        const data = await res.json();
        const slicedData = data.slice(0, 4);
        setServices(slicedData);
      } catch (err) {
        console.log("failed to fetch services", err);
      }
    };
    fetchServices();
  }, []);
  return (
    <div className="container mx-auto grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-5 m-5">
      {servies.map((value) => {
        return (
          <div key={value._id} className="m-0 p-0">
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
        );
      })}
    </div>
  );
};

export default VehicleList;
