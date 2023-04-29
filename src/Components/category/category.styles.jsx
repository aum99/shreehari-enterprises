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
  margin: 20px 5px;
  padding: 0 100px;
  margin-bottom: 65px;
`;

export const CategoryLink = styled(Link)`
  border: 1px solid;
  padding: 5px;
  margin: 2px 5px;
  text-decoration: none;
  color: black;
`;

export const Heading = styled.h1`
  display: inline-block;
  margin: 0;
  margin-left: 40%;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 600;
`;

export const CategoryButton = styled(Link)`
  border: 2px solid #ced4da;
  padding: 5px;
  margin: 2px 5px;
  text-decoration: none;
  color: black;
  :hover {
    border-color: #000000;
  }
`;

export const CategoryButtonsContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;
