import React from "react";
import Directory from "../../components/directory/directory";
const HomePage = () => (
  <>
    <div className="homepage   h-full  bg-blue-950 grid md:grid-cols-3 grid-flow-dense gap-3 sm:grid-cols-2">
      {<Directory />}
    </div>
  </>
);
export default HomePage;
