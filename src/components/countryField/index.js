import React from 'react';
import CountryButton from '../countryButton';

const Field = (props) => {
    const {language} = props;
    return (
        <>
            <CountryButton language={language} ButtonImage={`btn${language}`} />
        </>
    );
}

export default Field;