import { useSelector } from 'react-redux';

import { selectMakes } from 'components/redux/selectors.js';
import { selectAdverts } from 'components/redux/selectors.js';
import { nanoid } from 'nanoid';
import {
  Form,
  LabelBrand,
  SelectBrandd,
  OptionBrand,
  LabelPrice,
  SelectPrice,
  OptionPrice,
  DivMiles,
  LabelMiles,
  DivWrapMiles,
  IputMiles,
  InpuntEndMiles,
  DiwWrapEndMiles,
  LabelEndMiles,
  Search,
} from './FiltersStyles.js';
const breadId = nanoid();
const priceId = nanoid();
const mileageId = nanoid();
const endpriceId = nanoid();

export const Filters = () => {
  let carsPrice = [];
  const cars = useSelector(selectMakes);
  const advertCars = useSelector(selectAdverts);
  //const cars = useSelector(getMakes);
  console.log(advertCars.items);
  //const advertCars = useSelector(getAdverts);
  //if (!advertCars.isLoading) {
  advertCars.items.forEach(car =>
    carsPrice.push(Number.parseInt(car.rentalPrice.substring(1)))
  );

  let min = carsPrice[0];
  for (let i = 0; i < carsPrice.length; i += 1) {
    min = min < carsPrice[i] ? min : carsPrice[i];
  }
  let max = carsPrice[0];
  for (let i = 0; i < carsPrice.length; i += 1) {
    max = max > carsPrice[i] ? max : carsPrice[i];
  }
  min = min <= 10 ? 10 : Number.parseInt(min / 10 + 1) * 10;

  max = max <= 10 ? 10 : Number.parseInt(max / 10 + 1) * 10;

  carsPrice = [];

  for (let i = min; i <= max; i += 10) {
    carsPrice.push(i);
  }
  //console.log(carsPrice);
  //}

  return (
    <Form>
      <LabelBrand>
        Car brand
        <SelectBrandd id={breadId} name="bread">
          <OptionBrand value="">Enter the text</OptionBrand>
          {!cars.isLoading &&
            cars.items.map((car, index) => (
              <OptionBrand key={'c' + index} value={car}>
                {car}
              </OptionBrand>
            ))}
        </SelectBrandd>
      </LabelBrand>

      <LabelPrice>
        Price/ 1 hour
        <SelectPrice id={priceId} name="price">
          <OptionPrice value="">To $</OptionPrice>
          {!advertCars.isLoading &&
            carsPrice.map(car => (
              <OptionPrice key={'s' + car} value={car}>
                {car}
              </OptionPrice>
            ))}
        </SelectPrice>
      </LabelPrice>

      <DivMiles>
        Сar mileage / km
        <DivWrapMiles>
          <LabelMiles>From</LabelMiles>
          <IputMiles type="text" id={mileageId} name="mileage" />
        </DivWrapMiles>
      </DivMiles>

      <DiwWrapEndMiles>
        <LabelEndMiles>To</LabelEndMiles>
        <InpuntEndMiles type="text" id={endpriceId} name="endmiles" />
      </DiwWrapEndMiles>

      <Search type="submit">Search</Search>
    </Form>
  );
};
