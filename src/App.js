import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Started from "./components/pages/Individuals/Started";
import Rewa from "./components/pages/Individuals/Rewa";
import Chain from "./components/pages/Individuals/Chain";
import Staking from "./components/pages/Individuals/Staking";
import Sustainability from "./components/pages/Individuals/Sustainability";
import BuildersHub from "./components/pages/Developers/Builders";
import Dapp from "./components/pages/Developers/Dapp";
import Tutorials from "./components/pages/Developers/Tutorials";
import Tools from "./components/pages/Developers/Tools";
import Releases from "./components/pages/Developers/Releases";
import Roadmap from "./components/pages/Developers/Roadmap";

const App = () => {
return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Individuals/Started" element={<Started />} />
        <Route exact path="/Individuals/Rewa" element={<Rewa />} />
        <Route exact path="/Individuals/Chain" element={<Chain />} />
        <Route exact path="/Individuals/Staking" element={<Staking />} />
        <Route
          exact
          path="/Individuals/Sustainability"
          element={<Sustainability />}
        />
        <Route exact path="/Developers/BuildersHub" element={<BuildersHub />} />
        <Route exact path="/Developers/Dapp" element={<Dapp />} />
        <Route exact path="/Developers/Tools" element={<Tools />} />
        <Route exact path="/Developers/Releases" element={<Releases />} />
        <Route exact path="/Developers/Roadmap" element={<Roadmap />} />
        <Route exact path="/Developers/Tutorials" element={<Tutorials />} />
        <Route exact path="/Developers/Tutorials" element={<Tutorials />} />
        <Route exact path="/Developers/Tutorials" element={<Tutorials />} />
        <Route exact path="/Developers/Tutorials" element={<Tutorials />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
