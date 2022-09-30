import Slider from "./Slider";
import Header from "./Header";
import Cards from "./Cards";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Slider />
      <Header text="Latest videos" />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
