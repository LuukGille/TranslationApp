import React from 'react';
import CountryButton from '../countryButton';

const Field = (props) => {
    const {language} = props;
    return (
        <>
        <div class="fieldSection">
            <div className="btnSection">
                <CountryButton language={language} ButtonImage={`btn${language}`} />
            </div>
        </div>
        </>
    );
}

export default Field;