import React from 'react';
import CountryButton from '../countryButton';

const Field = (props) => {
    const {language} = props;
    return (
        <>
        <div className="btnSection">
            <CountryButton language={language} ButtonImage={`btn${language}`} />
        </div>
        </>
    );
}

export default Field;