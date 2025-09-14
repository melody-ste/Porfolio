import React, { useState, useEffect, useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";
import translations from "../contexts/translations";
import { Link } from "react-router-dom";

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
      <h1>Mes projets</h1>
      {projects.length === 0 && <p>Aucun projet pour le moment.</p>}
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.slug}`}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projets;