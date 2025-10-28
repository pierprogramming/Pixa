import "./App.css";
import MenuPage from "./pages/MenuPage";

const App = () => {
  return (
    <div className="flex h-screen">
      <div className="w-5/6">
        <p>HEYY</p>
      </div>
      <div className="bg-red-500 w-48">
        <MenuPage />
      </div>
    </div>
  );
};

export default App;
