import Link from 'next/link';
import React from 'react';
import { carProps } from '../../types/Car';
import CarDetail from '../CarDetail';
import styles from './CarItem.module.css';

const CarItem = ({ car }: carProps) => {
  return (
    <div key={car.id} className={styles.wrapper}>
      <Link href="/car/[id]" as={`/car/${car.id}`}>
        <CarDetail car={car} />
      </Link>
    </div>
  );
};

export default CarItem;
