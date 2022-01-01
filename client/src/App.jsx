import React from "react";
import {
  Welcome,
  Loader,
  Navbar,
  Transactions,
  Services,
  Footer,
} from "./components/index.js";

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
