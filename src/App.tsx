import Router from "components/Router";
import { useEffect, useState } from "react";
import { app } from "firebaseApp";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "components/Loader";

const App = () => {
  const auth = getAuth(app);

  const [init, setInit] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(!!auth?.currentUser);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      <ToastContainer />
      {init ? <Router isAuthenticated={isAuthenticated} /> : <Loader />}
    </>
  );
};

export default App;
