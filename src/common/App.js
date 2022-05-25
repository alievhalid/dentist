import React, { useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Content from "./Content";
import Auth from "../components/auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { loadClients } from "../redux/patients/patientsReducer";
import { loadAdmin } from "../redux/admin/adminReducer";
import { loadDentistList } from "../redux/dentists/dentistsReducer";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadClients());
    dispatch(loadAdmin());
    dispatch(loadDentistList());
  }, [dispatch]);
  const auth = useSelector((state) => state.authReducer);
  return (
    <div className="App">
      {auth.token === null ? (
        <Auth />
      ) : (
        <div className="content">
          <Sidebar />
          <Content />
        </div>
      )}
    </div>
  );
}

export default App;
