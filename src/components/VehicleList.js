import React from 'react'
import VehicleCard from './VehicleCard'

const VehicleList = () => {
  return (
    <div className='flex flex-wrap mx-auto justify-center container gap-5 p-4'>
        <VehicleCard/>
        <VehicleCard/>
        <VehicleCard/>
        <VehicleCard/>
    </div>
  )
}

export default VehicleList