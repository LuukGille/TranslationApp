import React from 'react';
import CountryField from './components/countryField'
import { withNamespaces } from 'react-i18next';

function App (props) {
  return (
    <div>
      <h1>{props.t('Welcome to React')}</h1>
      <CountryField language="NL" />
      <CountryField language="ENG" />
    </div>
  )
}

export default withNamespaces()(App);