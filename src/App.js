import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Ai from "./components/Ai";
import Display from "./components/Display";
import Emotions from "./components/Emotions";
import Other from "./components/Other";
import Profile from "./components/Profile";
import Reflection from "./components/Reflection";
import Return from "./components/Return";
import Schedule from "./components/Schedule";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Profile />} />
          <Route path="ai" element={<Ai />} />
          <Route path="display" element={<Display />} />
          <Route path="emotions" element={<Emotions />} />
          <Route path="other" element={<Other />} />
          <Route path="reflection" element={<Reflection />} />
          <Route path="return" element={<Return />} />
          <Route path="schedule" element={<Schedule />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
