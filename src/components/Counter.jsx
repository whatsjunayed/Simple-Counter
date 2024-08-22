import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/state/counter/CounterSlice";
import Button from "./Button";

const Counter = () => {
  const MyValue = useSelector((state) => state.counter.value);
  const MyAlert = useSelector((state) => state.counter.alertness);
  const MyFunc = useDispatch();
  return (
    <div className="h-screen w-full flex items-center bg-black justify-center flex-col">
      <h1 className="text-center text-7xl font-semibold my-6 text-blue-600">{MyValue}</h1>
      <div className="flex items-center w-full justify-around">
        <Button onClick={() => MyFunc(decrement())} className="bg-orange-600">
          Decrement
        </Button>
        <Button onClick={() => MyFunc(increment())}>Increment</Button>
      </div>
      <div className="text-[red] text-lg absolute bottom-[20%]">
        {MyAlert}
      </div>
    </div>
  );
};

export default Counter;
