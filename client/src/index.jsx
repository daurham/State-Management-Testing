import React from 'react';
import ReactDOM from 'react-dom/client';


//* Context:
import Context from './Context/Context';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <Context />
)
//*/;


/* Redux:
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './Redux/Redux';

const root = ReactDOM.createRoot(document.getElementById('app'));
!store ? null : root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
//*/;