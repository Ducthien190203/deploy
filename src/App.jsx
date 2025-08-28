import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Custom Hook Counter</h1>
      <Counter1 />
      <Counter2 />
    </div>
  );
}

export default App;
