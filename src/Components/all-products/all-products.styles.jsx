import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  padding: 0 100px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  text-align: center;
  justify-content: center;
  margin: 20px 5px;
`;

export const CategoryLink = styled(Link)`
  border: 1px solid;
  padding: 5px;
  margin: 2px 5px;
  text-decoration: none;
  color: black;
`;
