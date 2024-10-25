import React from "react";
const ContentProducer = ({ section }) => {
  return (
    <div className="menu-item bg-green-400 mr-8 h-48 mt-10 overflow-hidden relative ">
      <img
        src={section.imageUrl}
        className="h-auto object-contain hover:scale-150 transition duration-1000 "
        alt="cloth image"
      />

      <div className="bg-white opacity-50 absolute flex flex-col left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="title justify-center p-3 inline text-2xl bold italic">
          {section.title}
        </h1>

        <span className="subtitle  font-semibold">SHOP NOW</span>
      </div>
    </div>
  );
};
export default ContentProducer;
