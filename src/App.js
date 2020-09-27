import React from 'react';
import './App.css';
import Routes from './Routes';

// Redux
import { createStore } from 'redux';
import { rootReducer } from './core/Redux/rootReducer';
import { Provider } from 'react-redux'

const store = createStore(rootReducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>  
  );
}

export default App;
