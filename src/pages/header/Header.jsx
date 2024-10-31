import { Link, useNavigate } from "react-router-dom";
const Pay = () => {
  useNavigate("/payment");
};
export const Header = () => {
  const navigate = useNavigate();
  const toPayment = () => {
    navigate("/payment");
  };
  return (
    <div className="content-center">
      <h1 className="bg-yellow-600  text-center text-4xl italic font-black py-4">
        Header
      </h1>
      <div className="flex flex-row justify-between">
        <Link className="bg-green-400 " to="/hats">
          hat page
        </Link>
        <Link className="bg-yellow-300" to="/checkout">
          checkout page
        </Link>
        <h1 className="red" onClick={toPayment}>
          to payment page
        </h1>
      </div>
    </div>
  );
};
