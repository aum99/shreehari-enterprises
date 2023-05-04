import { useNavigate } from "react-router-dom";
import { Button } from "../product-card/product.styles";
import {
  BannerImage,
  Container,
  BannerText,
  BannerDescription,
  ButtonContainer,
} from "./banner-container.styles";

const BannerContainer = () => {
  const navigate = useNavigate();
  const NavigateToProducts = () => {
    navigate("/products");
  };
  return (
    <Container>
      <BannerImage />
      <BannerText>
        <h1>High Precision and Quality</h1>
        <BannerDescription>
          Our products are made in consideration to industy standards and we use
          high quailty material as well as equipments
        </BannerDescription>
        <ButtonContainer>
          <Button onClick={NavigateToProducts}>Explore</Button>
        </ButtonContainer>
      </BannerText>
    </Container>
  );
};

export default BannerContainer;
