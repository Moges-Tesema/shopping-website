import { Link, useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();
  const toPayment = () => {
    navigate("/payment");
  };
  const toShop = () => {
    navigate("/shop");
  };
  return (
    <div className="content-center">
      <h1 className="bg-yellow-600  text-center text-4xl italic font-black py-4">
        Header
      </h1>
      <div className="flex flex-row justify-between">
        <Link className="bg-green-400 " to="shop/hats">
          hat page
        </Link>
        <Link className="bg-yellow-300" to="/checkout">
          checkout page
        </Link>
        <p className="bg-yellow-900" onClick={toShop}>
          shop page
        </p>
        <h1 className="red" onClick={toPayment}>
          to payment page
        </h1>
      </div>
    </div>
  );
};
