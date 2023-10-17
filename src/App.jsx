import React, { useState } from "react";
import Search from "./components/search";
// import LimitPopUp from "./components/LimitPopUp";

const App = () => {
  // const [popUp, setPopUp] = useState(false);
  return (
    <div>
      <Search />
      {/* {popUp && <LimitPopUp />} */}
    </div>
  );
};

export default App;
