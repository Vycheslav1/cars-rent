import {
  Div,
  Title,
  Container,
  Services,
  Li,
  Preferences,
} from './HomeStyles.js';

export default function Home() {
  return (
    <Div>
      <Title>
        New Car Rental in Ukraine with Address Delivery within an Hour
      </Title>
      <Container>
        <Services>
          <Li>Concierge service</Li>
          <Li>Roadside Assistance</Li>
          <Li>Truck rental</Li>
          <Li>Additional options</Li>
        </Services>
        <Preferences>
          <Li>Over 250 cars in the fleet</Li>
          <Li>Registration takes up to 10 minutes</Li>
          <Li>Travel abroad is possible</Li>
          <Li>10 offices in the largest cities of Ukraine</Li>
        </Preferences>
        <ul></ul>
      </Container>
    </Div>
  );
}
