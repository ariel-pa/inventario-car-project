import { GetStaticPaths } from 'next/types';
import { Car, carProps } from '../../../../types/Car';
import UpdatePage from '../../../../templates/updatePage';

export default function Update({ car }: carProps) {
  return (
    <>
      <UpdatePage car={car} />
    </>
  );
}
export const getStaticProps = async (context: any) => {
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
