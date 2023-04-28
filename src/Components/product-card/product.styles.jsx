import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 90%;
  height: 350px;
  border: 1px solid;
  padding: 10px;
  display: inline-block;
  img {
    width: 100%;
    height: 80%;
    object-fit: cover;
    margin-bottom: 5px;
  }
`;

export const Name = styled.div`
  font-size: medium;
  font-weight: 400;
  margin: 5px;
`;

export const Price = styled.div`
  font-size: large;
  font-weight: 800;
  margin: 5px;
`;
