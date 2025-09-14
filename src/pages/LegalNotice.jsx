import React, { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";
import translations from "../contexts/translations";

const LegalNotice = () => {
  const { language } = useContext(LanguageContext);
  return (
   <div>
      <h1>{translations.footer.legalnotice[language]}</h1>
      <p>Ce site est un portfolio personnel. Hébergement : ... . Contact : melody_stephan@icloud.com</p>
    </div>
  );
};

export default LegalNotice;