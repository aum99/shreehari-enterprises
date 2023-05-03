import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 0 100px;
  margin-top: 150px;
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 20px;
`;
