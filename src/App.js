import React, { useState } from "react";
import style from "./App.module.css";

const App = () => {
  let [state, setState] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  let [count, setCount] = useState(0);
  let winLine = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const CheckWiner = () => {
    let s = count % 2 === 0 ? "X" : "O";
    for (let i = 0; i < 8; i++) {
      let line = winLine[i];
      if (
        state[line[0]] === s &&
        state[line[1]] === s &&
        state[line[2]] === s
      ) {
        alert(s + " win");
        setTimeout(() => {
          setCount(0);
          setState([null, null, null, null, null, null, null, null, null]);
        }, 700);
      }
    }
  };

  const ClickHendler = (event) => {
    let id = event.target.getAttribute("id");
    let curSQ = state;
    if (curSQ[id] === null) {
      curSQ[id] = count % 2 === 0 ? "X" : "O";
      setCount(count + 1);
      setState(curSQ);
    } else {
      alert("Э ты че дядя!?");
    }
    setTimeout(() => {
      CheckWiner();
    }, 100);
  };

  return (
    <div className={style.canvas}>
      <div className={style.areas} onClick={ClickHendler} id={0}>

        {state[0]}
      </div>
      <div className={style.areas} onClick={ClickHendler} id={1}>

        {state[1]}
      </div>
      <div className={style.areas} onClick={ClickHendler} id={2}>

        {state[2]}
      </div>
      <div className={style.areas} onClick={ClickHendler} id={3}>

        {state[3]}
      </div>
      <div className={style.areas} onClick={ClickHendler} id={4}>

        {state[4]}
      </div>
      <div className={style.areas} onClick={ClickHendler} id={5}>

        {state[5]}
      </div>
      <div className={style.areas} onClick={ClickHendler} id={6}>

        {state[6]}
      </div>
      <div className={style.areas} onClick={ClickHendler} id={7}>

        {state[7]}
      </div>
      <div className={style.areas} onClick={ClickHendler} id={8}>

        {state[8]}
      </div>
    </div>
  );
};

export default App;
