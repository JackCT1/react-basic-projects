import { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {};

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <>
      <h1>Second React App!</h1>
    </>
  );
}

export default App;
