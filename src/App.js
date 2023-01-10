import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Kontakte from "./routes/Kontakte";
import Mitarbeiter from "./routes/Mitarbeiter";
import News from "./routes/News";

import { Route,Routes } from "react-router-dom";


function App() {
  return (
<>
<Routes>

<Route path="/" element={<Home />} />
<Route path="/kontakte" element={<Kontakte />} />
<Route path="/mitarbeiter" element={<Mitarbeiter />} />
<Route path="/news" element={<News />} />
</Routes>

</>
  );
}

export default App;
