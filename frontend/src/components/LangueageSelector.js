import React from 'react';
import {withTranslation} from 'react-i18next'
import {changeLanguage} from '../api/apiCalls';

const LangueageSelector = (props) =>{

  const onChangeLanguage = language =>{
    const {i18n} = props;
    i18n.changeLanguage(language);
    changeLanguage(language);
  };


  return(
    <div className="container">
        <span onClick={()=>  onChangeLanguage('tr')} style={{cursor:'pointer'}} >TR  </span>
        <span onClick={()=>  onChangeLanguage('en')}  style={{cursor:'pointer'}}>EN  </span>
    </div>
  );
};


export default withTranslation()(LangueageSelector) ;
