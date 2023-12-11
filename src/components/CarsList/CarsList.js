import { useSelector } from 'react-redux';
import { selectAdverts } from 'components/redux/selectors.js';
import { RentalCars } from './CarsListStyles.js';
import { CarsListItem } from 'components/CarsListItem/CarsListItem.js';

export const CarsList = () => {
  const advertCars = useSelector(selectAdverts);

  return (
    <RentalCars>{advertCars.items.map(car => CarsListItem(car))}</RentalCars>
  );
};
