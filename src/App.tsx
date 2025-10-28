import "./App.css";

const App = () => {
  const onChangeColor = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <input type="color" onChange={onChangeColor} className="h-15 w-15" />
    </>
  );
};

export default App;
