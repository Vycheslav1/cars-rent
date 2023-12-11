import styled from 'styled-components';
import img from 'images/pexels-mike-bird-1335077.jpg';

export const Div = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
    ),
    url('${img}');
  background-size: cover;
  background-position: center;
`;

export const Container = styled.div`
  display: flex;
  position: absolute;
  top: 300px;
  left: 50%;
  width: 800px;
  height: auto;
  transform: translateX(-50%);
  justify-content: space-between;
`;

export const Title = styled.h1`
  display: flex;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.2;
  letter-spacing: 0.06em;
  color: #fff;
`;

export const Services = styled.ul`
  width: auto;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.2;
  letter-spacing: 0.06em;
  color: #fff;
`;

export const Li = styled.li`
  display: list-item;
  list-style-type: square;
  margin-top: 20px;
`;

export const Preferences = styled.ul`
  width: auto;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.2;
  letter-spacing: 0.06em;
  color: #fff;
`;

/*https://www.pexels.com/photo/red-mercedes-benz-convertible-1335077/ */
