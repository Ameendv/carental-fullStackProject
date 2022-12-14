import React from "react";
import "./Usage.css";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement } from "../redux/reducers/counterSlice";

function Usage() {
 

 const value=useSelector((state)=>state.counter.value)



  const dispatch = useDispatch();

  return (
    <div className="usage">
      <div className="usage-item">
        <button
          onClick={() => {
           dispatch(increment())
          }}
        >
          Increment
        </button>

        <label>{value}</label>

        <button
          onClick={() => {
            dispatch(decrement())
          }}
        >
          Decrement
        </button>
      </div>

      <button onClick={() => {}}>Green</button>

      <button onClick={() => {}}>Blue</button>
    </div>
  );
}

export default Usage;
