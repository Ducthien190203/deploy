import useIncrement from "../hooks/useIncrement";

export default function Counter2() {
  const [count, increase] = useIncrement(2);

  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <h2>Counter 2</h2>
      <p>Value: {count}</p>
      <button onClick={increase}>Add 2</button>
    </div>
  );
}
