import React, { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";
import translations from "../contexts/translations";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const LegalNotice = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <div>
        <Link to="/" className="back-link" >
          <Icon icon="bytesize:arrow-left" width="30" />
        </Link>
      </div>
    <div className="container-lg">
        <h1>{translations.footer.legalnotice[language]}</h1>
        <p>{translations.legalContent.para2[language]}</p>
        <h3>{translations.legalContent.title2[language]}</h3>
        <p>{translations.legalContent.para3[language]}</p>
        <h3>{translations.legalContent.title3[language]}</h3>
        <p>{translations.legalContent.para4[language]}</p>
        <h3>{translations.legalContent.title4[language]}</h3>
        <p>{translations.legalContent.para5[language]}</p>
        <h3>Cookies</h3>
        <p>{translations.legalContent.para6[language]}</p>
        <h3>Contact</h3>
        <p>{translations.legalContent.para7[language]}</p>
      </div>
    </div>
  );
};

export default LegalNotice;