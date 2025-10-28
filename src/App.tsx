import "./App.css";
import Canvas from "./components/Canvas";
import MenuPage from "./pages/MenuPage";

const App = () => {
  return (
    <div className="flex h-screen">
      <div className="w-5/6">
        <Canvas />
      </div>
      <div className="bg-red-500 w-100">
        <MenuPage />
      </div>
    </div>
  );
};

export default App;
