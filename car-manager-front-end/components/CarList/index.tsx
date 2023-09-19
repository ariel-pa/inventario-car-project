import React from 'react';
import { Car, carProps } from '../../types/Car';
import CarItem from '../CarItem';

const CarsList = ({ car }: any) => {
  return (
    <div>
      {car.map((c: Car) => (
        <CarItem car={c} key={c.id}></CarItem>
      ))}
    </div>
  );
};

export default CarsList;
