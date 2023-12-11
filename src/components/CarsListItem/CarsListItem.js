import PropTypes from 'prop-types';

import { Li, Image, ImageWrapper } from './CarsListItemStyles.js';

export const CarsListItem = ({ id, img, make }) => {
  return (
    <Li key={id}>
      <ImageWrapper>
        <Image src={img} alt={make} />
      </ImageWrapper>
    </Li>
  );
};

CarsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  make: PropTypes.string.isRequired,
};
