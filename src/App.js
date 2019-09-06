import './App.css';

import React from 'react';
import store from './store'
import { Provider } from 'react-redux'
import ListContainer from './components/ListContainer/ListContainer';
import CreateFormContainer from './components/CreateFormContainer/CreateFormContainer';
import LoginFormContainer from './components/LoginFormContainer';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <LoginFormContainer />
        <CreateFormContainer />
        <ListContainer />
      </Provider>
    );
  }
}


export default App;
