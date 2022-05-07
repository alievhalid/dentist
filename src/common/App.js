import React, { useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Content from "./Content";
// import Auth from "../components/auth/Auth";
import { useDispatch } from "react-redux";
import { loadClients } from "../redux/patients/patientsReducer";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadClients());
  }, [dispatch]);
  return (
    <div className="App">
       {/* <Auth /> */}
      <div className="content">
        <Sidebar />
        <Content />
      </div>
    </div>
  )
}

export default App;
