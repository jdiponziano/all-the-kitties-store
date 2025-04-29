import { categoryData } from "data/categories";
import { CategoryDirectory } from "components/category/category-directory";

const Home = () => {
  return <CategoryDirectory categories={categoryData} />;
};

export default Home;
