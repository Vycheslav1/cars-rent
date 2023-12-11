import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';

import { Filters } from 'components/Filters/Filters.js';

import { fetchMakes } from 'components/redux/operations.js';

import { fetchAdverts } from 'components/redux/operations.js';

import { selectAdverts } from 'components/redux/selectors.js';
import { CarsList } from 'components/CarsList/CarsList.js';

export default function Catalog() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMakes());
    dispatch(fetchAdverts(1));
  }, [dispatch]);

  const rentCars = useSelector(selectAdverts);

  return (
    <>
      {!rentCars.isLoading && <Filters />}
      {!rentCars.isLoading && <CarsList />}
    </>
  );
}
