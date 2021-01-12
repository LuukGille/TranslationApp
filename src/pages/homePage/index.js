import React from 'react';
import CountryField from '../../components/countryField'
import { withNamespaces } from 'react-i18next';

const homePage = (props) => {
    return (
        <>
            <div className="header">
                <h1>{props.t('Welcome to React')}</h1>
            </div>
                <div className="countrySection">
                    <CountryField language="NL" />
                    <CountryField language="ENG" />
                </div>
        </>
    );
}

export default withNamespaces() (homePage);
