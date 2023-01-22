import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";

const Home = () => {
  const index = 1;

  return (
    <div className="wrapper home">
      <Banner imgSource={`./image${index}.jpg`} />
      <Cards />
    </div>
  );
};

export default Home;
