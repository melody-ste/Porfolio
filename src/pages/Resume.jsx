import { Icon } from "@iconify/react";
import React, { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";
import translations from "../contexts/translations";

const Resume = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <h1>Mélody Stephan</h1>
      <h2>{translations.resume.jobTitle[language]}</h2>
      <div>
        <p>+33 7 71 00 77 71</p>
        <p>Haut-Rhin, Alsace</p>
        <p>melody_stephan@icloud.com</p>

        <p>
          <Icon icon="icomoon-free:linkedin" width="25" />
          <a href="https://www.linkedin.com/in/m%C3%A9lody-stephan-b4a485172/">Mélody Stephan</a>
        </p>
        <p> 
          <Icon icon="akar-icons:github-fill" width="25" />
          <a href="https://github.com/melody-ste">melody-ste</a>
        </p>
        <p>
          <Icon icon="simple-icons:artstation" width="25" />
          <a href="https://github.com/melody-ste">Mélody Stephan</a>
        </p>
      
      </div>
      <div>
        <h3>{translations.resume.skills[language]}</h3>
        <ul>
          <h4>{translations.resume.dev[language]}</h4>
          <li>HTML</li>
          <li>CSS/Sass</li>
          <li>Ruby/Ruby on rails</li>
          <li>Base de données SQLite & PostgreSQL</li>
          <li>Javascript/ReactJS</li>
          <li>Git/Github</li>
        </ul>
        <ul>
          <h4>{translations.resume.softwares[language]}</h4>
          <li>Maya</li>
          <li>Arnold</li>
          <li>ZBrush</li>
          <li>Adobe Photoshop</li>
          <li>Substance Painter</li>
          <li>Mari</li>
          <li>Nuke</li>
        </ul>
        <ul>
          <h4>{translations.resume.languages[language]}</h4>
          {translations.resume.languageList[language].map((lang, i) => (
            <li key={i}>{lang}</li>
          ))}
        </ul>
      </div>

      <div>
        <div>
          <h3>{translations.resume.profExp[language]}</h3>
          <ul>
            <li>
              <h4>{translations.resume.exp1Title[language]}</h4>
              <p>{translations.resume.exp1Date[language]}</p>
              <ul>
                {translations.resume.exp1Tasks[language].map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </li>
            <li>
              <h4>{translations.resume.exp2Title[language]}</h4>
              <p>{translations.resume.exp2Date[language]}</p>
              <ul>
                {translations.resume.exp2Tasks[language].map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </li>
            
          </ul>
        </div>

        <div>
          <h3>{translations.resume.education[language]}</h3>
          <ul>
            <li>
              <h4>{translations.resume.edu1[language]}</h4>
              <p>{translations.resume.edu1Date[language]}</p>
              <p>{translations.resume.edu1School[language]}</p>
            </li>
            <li>
              <h4>{translations.resume.edu2[language]}</h4>
              <p>{translations.resume.edu2Date[language]}</p>
              <p>{translations.resume.edu2School[language]}</p>
            </li>
            <li>
              <h4>{translations.resume.edu3[language]}</h4>
              <p>{translations.resume.edu3Date[language]}</p>
              <p>{translations.resume.edu3School[language]}</p>
            </li>
            <li>
              <h4>{translations.resume.edu4[language]}</h4>
              <p>{translations.resume.edu4Date[language]}</p>
              <p>{translations.resume.edu4School[language]}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Resume;