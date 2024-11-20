import React from "react";
import VehicleCard from "./VehicleCard";
import { services } from "../mockData/services";

const VehicleList = () => {
  const filteredServices = services.slice(0, 3);
  return (
    <div className="container mx-auto grid grid-cols-[repeat(auto-fill,_minmax(330px,_1fr))] gap-5 m-5">
      {filteredServices.map((value) => {
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
              img={value.img}
            />
          </div>
        );
      })}
    </div>
  );
};

export default VehicleList;
