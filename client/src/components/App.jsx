import React, { useRef } from "react";

import { useData } from "../Context/Context";
import { useSelector, useDispatch } from "react-redux";
import { incrementCount, decrementCount, changeInput } from "../Redux/Redux";


export default function App() {
  const render = useRef(0);
  const dispatch = useDispatch();
  
  const { countC, inputC, moviesC, contextFunctions } = useData(); 
  const { countR, inputR, moviesR } = useSelector(state => state.movieList);

  const incrementCountContext = () => contextFunctions.incrementCount();
  const decrementCountContext = () => contextFunctions.decrementCount();
  const incrementCountRedux = () => dispatch(incrementCount());
  const decrementCountRedux = () => dispatch(decrementCount());

  const changeInputContext = (input) => contextFunctions.changeInput(input);
  const changeInputRedux = (input) => dispatch(changeInput(input));

  return (
    <div>
      <h1>My App</h1>
      <h6>Renders: {render.current += 1}</h6>
      <pre>CountC: {countC}</pre>
      <pre>InputC: {inputC}</pre>
      <br />
      <pre>CountR: {countR}</pre>
      <pre>InputR: {inputR}</pre>

      <br />
      Context:
      <button onClick={incrementCountContext}>➕</button>
      <button onClick={decrementCountContext}>➖</button>
      <input onChange={(e) => changeInputContext(e.target.value)} />
      <br />
      Redux:
      <button onClick={incrementCountRedux}>➕</button> 
      <button onClick={decrementCountRedux}>➖</button>
      <input onChange={(e) => changeInputRedux(e.target.value)} />
    </div>
  );
};

