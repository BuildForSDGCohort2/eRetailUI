import React from "react";
import { Collection, Footer, Header, HotDeal, Nav, NewsLetter } from "./Components";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Collection />
      <HotDeal />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
