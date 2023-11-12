import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <div className="grid grid-cols-4 ">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
