import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
`;

export const BannerImage = styled.div`
  width: 60%;
  height: 500px;
  background-size: cover;
  background-position: center;
  background-image: url("https://images.unsplash.com/photo-1573998648748-fa6ef521cdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80");
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
`;

export const BannerText = styled.div`
  width: 40%;
  background-color: #e9ecef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 80px;
`;

export const BannerDescription = styled.p`
  font-size: larger;
  font-weight: 300;
  margin-top: 0;
`;

export const ButtonContainer = styled.div`
  width: 30%;
`;
