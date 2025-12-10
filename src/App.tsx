import "./styles/variables.scss";

import Banner from "./components/Banner/Banner";
import AboutUs from "./components/AboutUs/AboutUs";
import Catalog from "./components/Catalog/Catalog";
import YouTubeSlider from "./components/YouTubeSlider/YouTubeSlider";
import Advantages from "./components/Advantages/Advantages";
import Reviews from "./components/Reviews/ReviewsSlider";
import LastBanner from './components/LastBanner/LastBanner';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <main className="app">
      <Header />
      <Banner />
      <AboutUs />
      <Catalog />
      <YouTubeSlider />
      <Advantages />
      <Reviews />
      <LastBanner />
      <Footer />
    </main>
  );
}