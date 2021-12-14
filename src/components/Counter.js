import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementCount, decrementCount, setnumData } from "../actions/Action";

const Counter = () => {
  const { counter, numData } = useSelector((state) => state.count);
  console.log(counter, "cn");
  console.log(numData, "nn");
  const dispatch = useDispatch();

  const incrementbyamount = () => {
    dispatch(incrementCount(numData));
  };
  const decrementbyamount = () => {
    dispatch(decrementCount(numData));
  };

  const onChangeHandler = (e) => {
    e.target.value && dispatch(setnumData(e.target.value));
  };

  return (
    <>
      <p>value: {counter}</p>
      <input onChange={onChangeHandler} type="text" value={numData} />
      <button onClick={incrementbyamount}>Increment By Amount</button>
      <button onClick={decrementbyamount}>Decrement By Amount</button>
    </>
  );
};

export default Counter;
