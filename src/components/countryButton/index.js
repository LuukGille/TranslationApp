import React from 'react';
import i18n from '../../i18n';
import { withNamespaces } from 'react-i18next';

const countryButton = (props) => {
    const {language, ButtonImage} = props;
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <>
            <div className="btn">
                <button onClick={() => changeLanguage(language)} className="btnIcon">
                    <div className={`btn ${ButtonImage}`}></div>
                </button>
            </div>
        </>
    )
}

export default withNamespaces ()(countryButton);