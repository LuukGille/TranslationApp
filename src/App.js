import React from 'react';
import Home from '../src/components/pages/homePage';
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