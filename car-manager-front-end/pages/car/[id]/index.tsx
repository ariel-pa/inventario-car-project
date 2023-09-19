import { GetStaticProps } from 'next';
import { GetStaticPaths } from 'next';
import { Car, carProps } from '../../../types/Car';
import ViewPage from '../../../templates/viewPage';

const car = ({ car }: carProps) => {
  return (
    <>
      <ViewPage car={car} />
    </>
  );
};
export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/car/${context?.params?.id}`,
  );
  const car = await res.json();
  return {
    props: {
      car,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/car`);
  const cars: Car[] = await res.json();
  const ids = cars.map((car) => car.id);
  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default car;
