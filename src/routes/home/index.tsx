import { categoryData } from "data/categories";
import Directory from "components/directory";

const Home = () => {
  return <Directory categories={categoryData} />;
};

export default Home;
