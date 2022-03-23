import Sidebar from "../components/sidebar/Sidebar";
import Content from "./Content";
import Auth from "../components/auth/Auth";

function App() {
  return (
    <div className="App">
        <Auth/>
      <div className="content">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
