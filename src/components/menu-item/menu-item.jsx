import React from "react";
import { useNavigate } from "react-router-dom";
const MenuItem = ({ title, imageUrl, linkUrl }) => {
  const navigate = useNavigate();
  const pageChange = () => {
    navigate(`${linkUrl}`);
  };
  return (
    <div className="relative h-64 w-full overflow-hidden" onClick={pageChange}>
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-150"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content absolute z-10 flex flex-col items-center bg-white justify-between opacity-60 mx-24 my-24">
        <h1 className="title justify-center p-3 inline text-2xl bold italic">
          {title}
        </h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
export default MenuItem;
