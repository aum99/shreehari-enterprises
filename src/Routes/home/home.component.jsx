import HeroItem from "../../Components/hero-item/hero-item.component";
import PopularProducts from "../../Components/popular-products/popular-products.component";
import BannerContainer from "../../Components/banner-container/banner-container.component";

import { HeroContainer, HomeContainer, ProductsContainer } from "./home.styles";

const categories = [
  {
    id: 1,
    title: "Bolts and Nuts",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1677612031010-5424f4ea90ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    route: "products/bolts-nuts",
  },
  {
    id: 2,
    title: "Valves",
    imageUrl:
      "https://images.unsplash.com/photo-1602982356353-7e0b033a2880?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    route: "products/valves",
  },
  {
    id: 3,
    title: "Pistons",
    imageUrl:
      "https://images.unsplash.com/photo-1608834951273-eac269926962?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    route: "products/pistons",
  },
  {
    id: 4,
    title: "Gauges",
    imageUrl:
      "https://images.unsplash.com/photo-1567093322503-341d262ad8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    route: "products/gauges",
  },
  {
    id: 5,
    title: "Gauges",
    imageUrl:
      "https://images.unsplash.com/photo-1567093322503-341d262ad8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    route: "products/gauges",
  },
];
const Home = () => {
  return (
    <HomeContainer>
      <HeroContainer>
        {categories.map((category) => (
          <HeroItem key={category.id} category={category} />
        ))}
      </HeroContainer>
      <h1>Products we are proud of</h1>
      <ProductsContainer>
        <PopularProducts />
      </ProductsContainer>
      <BannerContainer />
    </HomeContainer>
  );
};

export default Home;
