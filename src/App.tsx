import Router from "components/Router";
import { useState } from "react";
import { app } from "firebaseApp";
import { getAuth } from "firebase/auth";

const App = () => {
  const auth = getAuth(app);

  const [isAuthenticated, setIsAuthenticated] = useState(!!auth?.currentUser);
  return <Router isAuthenticated={isAuthenticated} />;
};

export default App;
