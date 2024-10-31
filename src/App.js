import HomePage from "./pages/homepage/homepage";
import { Header } from "./pages/header/Header";
import { Route, Routes } from "react-router-dom";
const HomePages = () => <div>welcome to home page</div>;
const HatPage = () => <div>hats page</div>;
const CheckOutPage = () => <h1>checkout pages</h1>;
const Payment = () => <h2>payment page</h2>;
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
        <Route path="/hats" element={<HatPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>
    </>
  );
}
export default App;
