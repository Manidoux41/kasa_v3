import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";

const Home = () => {
  const index = 1;
  const [title, setTitle] = useState('')
  useEffect(() => {
    setTitle('Chez vous, partout et ailleurs')
  },[])
  return (
    <div className="wrapper home">
      <Banner imgSource={`./image${index}.jpg`} title={title}/>
      <Cards />
    </div>
  );
};

export default Home;
