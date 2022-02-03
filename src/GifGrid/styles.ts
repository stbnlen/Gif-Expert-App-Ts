import styled from 'styled-components';

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  & p {
    padding: 5px;
    text-align: center;
  }

  & img {
    max-height: 90%;
    width: 90%;
    border-radius: 6px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;
