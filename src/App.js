import "./App.css";
import PreNavbar from "./Components/PreNavbar";
import Navbar from "./Components/Navbar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Slider from "./Components/Slider";
import data from "./Data/data.json";
import Offers from "./Components/Offers";
import Heading from "./Components/Heading.js";
import StarProduct from "./Components/StarProduct.js";
import HotAccessoriesMenu from "./Components/HotAccessoriesMenu.js";
import HotAccessories from "./Components/HotAccessories.js";
import ProductReviews from "./Components/ProductReviews.js";
import Videos from "./Components/Videos.js";
import Banner from "./Components/Banner.js";
import Footer from "./Components/Footer.js";
import NavOptions from "./Components/NavOptions.js";

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />

      <Routes>
        <Route
          path="/:navid"
          element={
            <NavOptions
              miPhones={data.miPhones}
              redmiPhones={data.redmiPhones}
              tv={data.tv}
              laptop={data.laptop}
              fitnessAndLifeStyle={data.fitnessAndLifeStyle}
              home={data.home}
              audio={data.audio}
              accessories={data.accessories}
            />
          }
        ></Route>
      </Routes>

      {/* <NavOptions
        miPhones={data.miPhones}
        redmiPhones={data.redmiPhones}
        tv={data.tv}
        laptop={data.laptop}
        fitnessAndLifeStyle={data.fitnessAndLifeStyle}
        home={data.home}
        audio={data.audio}
        accessories={data.accessories}
      /> */}

      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
      <Heading text="star products" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="hot accessories" />
      <HotAccessoriesMenu />

      <Routes>
        <Route
          exact
          path="/music"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        ></Route>
        <Route
          exact
          path="/smartDevice"
          element={
            <HotAccessories
              smartDevice={data.hotAccessories.smartDevice}
              smartDeviceCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        ></Route>
        <Route
          exact
          path="/home"
          element={
            <HotAccessories
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            />
          }
        ></Route>
        <Route
          exact
          path="/lifestyle"
          element={
            <HotAccessories
              lifestyle={data.hotAccessories.lifeStyle}
              lifestyleCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        ></Route>
        <Route
          exact
          path="/mobileAccessories"
          element={
            <HotAccessories
              mobileAccessories={data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        ></Route>
      </Routes>

      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews} />

      <Heading text="videos" />
      <Videos videos={data.videos} />

      <Heading text="In the press" />
      <Banner banner={data.banner} />

      <Footer footer={data.footer} />
    </Router>
  );
}

export default App;
