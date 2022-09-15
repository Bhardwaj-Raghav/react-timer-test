import { useRef, useState } from "react";

const Palindrome = () => {
  const [value, setValue] = useState("");
  const pRef = useRef();

  const handleClick = () => {
    const stringLength = value.length;
    const isEven = stringLength % 2 === 0;

    let middleIndex = parseInt(stringLength / 2, 10);
    middleIndex = isEven ? middleIndex - 1 : middleIndex;

    let isFail = false;
    let index1 = middleIndex,
      index2 = isEven ? middleIndex + 1 : middleIndex;

    for (let i = 0; i <= middleIndex; i++) {
      if (value[index1--] !== value[index2++]) {
        isFail = true;
      }
    }

    if (isFail) {
      pRef.current.innerText = "False";
    } else {
      pRef.current.innerText = "True";
    }
  };

  return (
    <div className="App">
      <h1>Palindrome Check</h1>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={handleClick}>Check!</button>
      <p ref={pRef}></p>
    </div>
  );
};

export default Palindrome;
