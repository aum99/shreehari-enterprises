import { Route, Routes } from "react-router-dom";

import Navigation from "./Routes/navigation/navigation.component";
import Home from "./Routes/home/home.component";
import Categories from "./Routes/categories/categories.component";
import Auth from "./Routes/authentication/authentication.component";

import Footer from "./Components/footer/footer.component";

import "./App.css";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="products/*" element={<Categories />} />
          <Route path="auth" element={<Auth />} />
        </Route>
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
