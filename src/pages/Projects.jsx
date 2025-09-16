import React, { useState, useEffect, useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";
import translations from "../contexts/translations";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Projets = () =>  {
  const { language } = useContext(LanguageContext);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const url = `https://funny-activity-cb50ecb0b0.strapiapp.com/api/projects?populate=*`;
        const response = await fetch(url);
        const data = await response.json();
        setProjects(data.data); 
      } catch (err) {
        console.error(err);
        setError("Impossible de charger les projets.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;

 return (
    <div>
      <div>
        <Link to="/" className="back-link" >
          <Icon icon="bytesize:arrow-left" width="30" />
        </Link>
      </div>

      <div className="container-projects" >
        <h1>{translations.projects.projectsTitle[language]}</h1>
        {projects.length === 0 && <p>Aucun projet pour le moment.</p>}
        <ul className="projects-list">
          {projects.map((project) => (
            <li key={project.id} className="project-card">
               <Link to={`/projects/${project.slug}`} className="project-link">
                  {project.header?.data?.attributes?.url && (
                    <img
                      src={project.header.data.attributes.url}
                      alt={project.title}
                      className="project-card-header"
                    />
                  )}
                  <h2>{project.title}</h2>
                </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projets;