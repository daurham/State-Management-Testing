import React, { useRef } from "react";

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
  const { countC, inputC, moviesC, contextFunctions } = useData(); // Context
  let countR;
  
  const incrementCount = () => contextFunctions.incrementCount();
  const decrementCount = () => contextFunctions.decrementCount();
  //*/
  
  /* Redux:
  const dispatch = useDispatch();
  const { countR, inputR, moviesR } = useSelector(state => state.movieList); // Redux
  let countC;

  const incrementCount = () => dispatch(incrementCount());
  const decrementCount = () => dispatch(decrementCount());
  //*/


  return (
    <div>
      <h1>My App</h1>
      <h6>Count: {countC || countR}</h6>
      <h6>Renders: {render.current += 1}</h6>

      <button onClick={incrementCount}>➕</button>
      <button onClick={decrementCount}>➖</button>
    </div>
  );
};
