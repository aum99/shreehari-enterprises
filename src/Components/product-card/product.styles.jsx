import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 90%;
  height: 400px;
  border: 2px solid #ced4da;
  border-radius: 10px;
  padding: 10px;
  display: inline-block;
  text-align: center;
  img {
    width: 100%;
    height: 70%;
    object-fit: cover;
    margin-bottom: 5px;
    border-radius: 10px;
  }
  :hover {
    border-color: #000000;
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

export const Button = styled.button`
  appearance: none;
  background-color: transparent;
  border: 2px solid #1a1a1a;
  border-radius: 15px;
  box-sizing: border-box;
  color: #3b3b3b;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 50px;
  min-width: 0;
  outline: none;
  padding: 10px 18px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  margin-top: 5px;
  :disabled {
    pointer-events: none;
  }

  :hover {
    color: #fff;
    background-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  :active {
    box-shadow: none;
    transform: translateY(0);
  }
`;
