import { Routes, Route } from "react-router";
import Navigation from "components/navigation";
import Home from "routes/home";
import Shop from "routes/shop";
import SignIn from "routes/sign-in";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
