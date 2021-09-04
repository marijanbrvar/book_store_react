import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './styles/App.css';
import Categories from './components/Categories';
import Header from './components/Header';
import Books from './components/Books';
import store from './redux/configStore';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Books />
        </Route>
        <Route path="/categories">
          <Categories message="Under Construction" />
        </Route>
      </Switch>
    </div>
  </Provider>
);

export default App;
