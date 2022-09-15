import "./App.css";
import Palindrome from "./palindrome";
import Timer from "./timer";
import Timer1 from "./timer-1";

function App() {
  return (
    <>
      <h3 style={{ textAlign: "center" }}>Using setTimeout</h3>
      <p style={{ textAlign: "center" }}>
        {" "}
        &lt;- Left Timer: Update Using ref | Right Timer: Directly setting value
        in jsx -&gt;
      </p>
      <Timer />
      <h3 style={{ textAlign: "center" }}>Using setInterval</h3>
      <p style={{ textAlign: "center" }}>
        {" "}
        &lt;- Left Timer: Update Using ref | Right Timer: Directly setting value
        in jsx -&gt;
      </p>
      <Timer1 />
      <h3 style={{ textAlign: "center" }}>Palindrome Check</h3>
      <Palindrome />
    </>
  );
}

export default App;
