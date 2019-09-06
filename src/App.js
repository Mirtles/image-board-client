import './App.css';

import React from 'react';
import store from './store'
import { Provider } from 'react-redux'
import ListContainer from './components/ListContainer/ListContainer';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ListContainer />
      </Provider>
    );
  }
}


export default App;
