import Sidebar from "../components/sidebar/Sidebar";
import Content from "./Content";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
