import React from 'react';
import CountryField from '../countryField'
import { withNamespaces } from 'react-i18next';

const homePage = (props) => {
    return (
        <>
            <h1>{props.t('Welcome to React')}</h1>
            <div className="section">
                <CountryField language="NL" />
                <CountryField language="ENG" />
            </div>
        </>
    );
}

export default withNamespaces() (homePage);
