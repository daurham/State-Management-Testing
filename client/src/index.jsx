import React from 'react';
import ReactDOM from 'react-dom/client';

//* Joint:
import { Provider } from 'react-redux';
import Context from './Context/Context';
import { store } from './Redux/Redux';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <Provider store={store}>
    <Context />
  </Provider>
);
//*/


/* Context:
// IF using the separate versions, make sure you're correctly importing App_Separate from Context.jsx
import Context from './Context/Context';
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <Context />
);
//*/


/* Redux:
import App from './components/App_Separate';
import { Provider } from 'react-redux';
import { store } from './Redux/Redux';

const root = ReactDOM.createRoot(document.getElementById('app'));
!store ? null : root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
//*/