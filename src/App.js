import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, ProtectedRoute, Signup, Error, Landing } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <ToastContainer
        position="top-center"
        pauseOnHover={false}
        theme="light"
        closeOnClick={true}
        autoClose={1000}
      />
    </Router>
  );
};

export default App;
