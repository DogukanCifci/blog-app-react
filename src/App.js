import "./App.css";
import AuthContextProvider from "./context/AuthContextProvider";
import Router from "./router/Router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Router />
        <ToastContainer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
