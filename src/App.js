import "./styles.css";
import { supabase } from "./supabaseClient";
import { useState, useEffect } from "react";

import Auth from "./Auth";
import Account from "./Account";

import { Link } from "react-router-dom";

export default function App() {
  const [session, setSession] = useState(null);
  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  return (
    <div className="App">
      <h1>Hello slave in the workplace</h1>
      <div className="container" style={{ padding: "50px 0 100px 0" }}>
        {!session ? (
          <Auth />
        ) : (
          <Account key={session.user.id} session={session} />
        )}
      </div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/management">Management</Link> |{" "}
        <Link to="/roster_booking">Roster Booking</Link> |{" "}
        <Link to="/view_roster">View Roster </Link>
      </nav>
    </div>
  );
}

//http://localhost:3000
