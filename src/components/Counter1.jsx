import useIncrement from "../hooks/useIncrement";

export default function Counter1() {
  const [count, increase] = useIncrement(1);

  return (
    <div style={{ margin: "20px", textAlign: "center" ,background:"green"}}>
      <h2>Counter 1</h2>
      <p>Value: {count}</p>
      <button onClick={increase}>Add 1</button>
    </div>
  );
}
