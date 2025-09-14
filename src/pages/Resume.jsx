import { Icon } from "@iconify/react";
import React, { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";
import translations from "../contexts/translations";
import { Link } from "react-router-dom";

const Resume = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <div>
        <Link to="/" >
          <Icon icon="bytesize:arrow-left" width="30" />
        </Link>
      </div>
      <div className="container-resume">
        
        <div className="resume-left">
          <div className="card-resume">
            <h1 className="title-resume">Mélody Stephan</h1>
            <h2>{translations.resume.jobTitle[language]}</h2>
            <p className="contact">+33 7 71 00 77 71 | Haut-Rhin, Alsace | melody_stephan@icloud.com</p>

            <div className="resume-links"> 
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
          </div>

          <div>
            <h2>{translations.resume.skills[language]}</h2>
            <ul>
              <li><h3>{translations.resume.dev[language]}</h3></li>
              <ul>
                <li>HTML</li>
                <li>CSS/Sass</li>
                <li>Ruby/Ruby on rails</li>
                <li>Base de données SQLite & PostgreSQL</li>
                <li>Javascript/ReactJS</li>
                <li>Git/Github</li>
              </ul>
              
            </ul>
            <ul>
              <li><h3>{translations.resume.softwares[language]}</h3></li>
              <ul>
                <li>Maya</li>
                <li>Arnold</li>
                <li>ZBrush</li>
                <li>Adobe Photoshop</li>
                <li>Substance Painter</li>
                <li>Mari</li>
                <li>Nuke</li>
              </ul>
              
            </ul>
            <ul>
              <h3>{translations.resume.languages[language]}</h3>
              {translations.resume.languageList[language].map((lang, i) => (
                <li key={i}>{lang}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="resume-right">
          <div>
            <h2>{translations.resume.profExp[language]}</h2>
            <ul>
              <li>
                <h3>{translations.resume.exp1Title[language]}</h3>
                <p>{translations.resume.exp1Date[language]}</p>
                <ul>
                  {translations.resume.exp1Tasks[language].map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </li>
              <li>
                <h3>{translations.resume.exp2Title[language]}</h3>
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
            <h2>{translations.resume.education[language]}</h2>
            <ul>
              <li>
                <h3>{translations.resume.edu1[language]}</h3>
                <p>{translations.resume.edu1Date[language]}</p>
                <p>{translations.resume.edu1School[language]}</p>
              </li>
              <li>
                <h3>{translations.resume.edu2[language]}</h3>
                <p>{translations.resume.edu2Date[language]}</p>
                <p>{translations.resume.edu2School[language]}</p>
              </li>
              <li>
                <h3>{translations.resume.edu3[language]}</h3>
                <p>{translations.resume.edu3Date[language]}</p>
                <p>{translations.resume.edu3School[language]}</p>
              </li>
              <li>
                <h3>{translations.resume.edu4[language]}</h3>
                <p>{translations.resume.edu4Date[language]}</p>
                <p>{translations.resume.edu4School[language]}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;