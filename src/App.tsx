import { categoryData } from "data/categories";
import Directory from "components/directory";

const App = () => {
  return (
    <div className="site-container">
      <Directory categories={categoryData} />
    </div>
  );
};

export default App;
