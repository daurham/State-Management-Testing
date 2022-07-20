import React, { useEffect, useRef, useState } from "react";

//* Context: 
import { useData } from "../Context/Context";
// */

/* Redux:
import { useSelector, useDispatch } from "react-redux";
import { incrementCount, decrementCount } from "../Redux/Redux";
//*/

export default function App() {
  const render = useRef(0);


  //* Context:
  const { count, globalInput, movies, contextFunctions } = useData(); // Context
  console.log(count, globalInput, movies);

  const incrementCountContext = () => contextFunctions.incrementCount();
  const decrementCountContext = () => contextFunctions.decrementCount();
  //*/

  /* Redux:
  const dispatch = useDispatch();
  const { count, globalInput, movies } = useSelector(state => state.movieList);
  console.log(count, globalInput, movies);

  const incrementCountRedux = () => dispatch(incrementCount());
  const decrementCountRedux = () => dispatch(decrementCount());
  //*/

  return (
    <div>
      <h1>My App</h1>
      <h6>Count: {count}</h6>
      <h6>Renders: {render.current += 1}</h6>

      <button onClick={incrementCountContext}>➕</button>
      <button onClick={decrementCountContext}>➖</button>
      {/* <button onClick={incrementCountRedux}>➕</button> */} 
      {/* <button onClick={decrementCountRedux}>➖</button> */}
    </div>
  );
};