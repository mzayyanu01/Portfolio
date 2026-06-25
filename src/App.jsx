import { useState } from "react";
import SideBar from "./Components/SideBar";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import Contacts from "./Pages/Contacts";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Services from "./Pages/Services";
import WorkExperience from "./Components/WorkExperience";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<SideBar />}>
        <Route index element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<WorkExperience />} />
      </Route>,
    ),
  );
  return (
    <div className="App bg-green-950">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
