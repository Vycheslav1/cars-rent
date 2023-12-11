import styled from 'styled-components';

export const Li = styled.li`
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: auto;
  height: auto;
  object-fit: cover;
`;

export const Image = styled.img`
  display: flex;
  width: 274px;
  height: 268px;
  background: linear-gradient(
    180deg,
    rgba(18, 20, 23, 0.5) 2.5%,
    rgba(18, 20, 23, 0) 41.07%
  );
`;
