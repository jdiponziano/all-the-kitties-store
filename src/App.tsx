import { Routes, Route } from "react-router";
import { SiteHeader } from "components/sections/site-header";
import Home from "routes/home";
import Shop from "routes/shop";
import Account from "routes/account";
import Checkout from "routes/checkout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SiteHeader />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="account" element={<Account />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
