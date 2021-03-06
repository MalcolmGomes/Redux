import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


// Basic Redux Concepts
// // Actions
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }

// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }

// // Reducer
// const counter = (state = 0, action) => {
//   switch(action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state
//   }
// }

// // Give reducer to store
// let store = createStore(counter);

// // Display in console
// store.subscribe(() => console.log(store.getState()));

// // Dispatch
// store.dispatch(increment())
// store.dispatch(decrement())
// store.dispatch(decrement())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);

serviceWorker.unregister();
