import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { receiveTodos, receiveTodo } from './actions/todo_actions';



document.addEventListener('DOMContentLoaded', () => {

  // const preloadedState = localStorage.state ?
  //   JSON.parse(localStorage.state) : {};
  const preloadedState = {};
  const store = configureStore(preloadedState);

  // TESTING START
  window.store = store
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.receiveTodo = receiveTodo;
  //

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
})
