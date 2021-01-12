import React from 'react';
import Home from './pages/homePage/index';
import {
  Switch,
  Route
} from 'react-router-dom';

function App () {
  return (
    <>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  )
}

export default App;