import HomePage from "./pages/homepage/homepage";
import { Header } from "./pages/header/Header";
import { Link, Route, Routes } from "react-router-dom";
import Ethipian from "./components/menu-item/images/Ethiopian.png";
const HomePages = () => <div>welcome to home page</div>;
const HatPage = () => <div>hats page</div>;
const CheckOutPage = () => <h1>checkout pages</h1>;
const ShosePage = () => <h1>Shoses page</h1>;
const JacketPage = () => <h1>Jackage page</h1>;
const EthiopianDress = () => (
  <h1 className="h-screen" style={{ backgroundImage: `url(${Ethipian})` }}>
    Ethiopian dress style
  </h1>
);
const WomenClothPage = () => <h1>Womens cloth page</h1>;
const MenClothPage = () => <h1>Mens cloth page</h1>;
const Payment = () => <h2>payment page</h2>;
const Shop = () => (
  <>
    <h1 className="white">Wel come to shop page</h1>
    <div className="bg-green-800 grid grid-cols-3 sd:grid-cols-2 gap-10 justify-between h-screen">
      <Link to="hats" className="bg-red-400">
        {" "}
        to Hat page
      </Link>
      <Link to="womens" className="bg-yellow-400">
        to womens page
      </Link>
      <Link to="mens" className="bg-blue-700">
        to mens page
      </Link>
      <Link to="sneakers" className="bg-orange-500">
        to sneakers page
      </Link>
      <Link to="jackets" className="bg-slate-600">
        to jackets page
      </Link>
      <Link to="ethiopian" className="bg-gray-200">
        to Ethiopian cloth page
      </Link>
    </div>
  </>
);
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HomePage />
            </>
          }
        />
        <Route path="/payment" element={<Payment />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="shop/hats" element={<HatPage />} />
        <Route path="shop/womens" element={<WomenClothPage />} />
        <Route path="shop/mens" element={<MenClothPage />} />
        <Route path="shop/sneakers" element={<ShosePage />} />
        <Route path="shop/jackets" element={<JacketPage />} />
        <Route path="shop/ethiopian" element={<EthiopianDress />} />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>
    </>
  );
}
export default App;
