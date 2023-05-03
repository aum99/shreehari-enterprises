import { useNavigate } from "react-router-dom";
import {
  CategoryItemContainer,
  BackgroundImage,
  Body,
} from "./hero-item.styles";

const HeroItem = ({ category }) => {
  const { imageUrl, title, route } = category;

  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  return (
    <CategoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
      </Body>
    </CategoryItemContainer>
  );
};

export default HeroItem;
