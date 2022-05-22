import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ReactDOM from "react-dom/client"; //react router dependency
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Management from "./routes/management";
import RosterBooking from "./routes/RosterBooking";
import ViewRoster from "./routes/ViewRoster";

const rootElement = document.getElementById("root");

//const root = createRoot(rootElement);

const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="management" element={<Management />} />
        <Route path="roster_booking" element={<RosterBooking />} />
        <Route path="view_roster" element={<ViewRoster />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <h1>Error 404: </h1>
              <p>Not Found </p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
