import React from "react";
import useIsMobile from "./hooks/useIsMobile.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  const isMobile = useIsMobile(820); // <= 820px considered mobile

  return <HomePage isMobile={isMobile} />;
}

export default App;
