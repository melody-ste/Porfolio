import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import LanguageContext from "../contexts/LanguageContext";

const ProjectDetail = () => {
  
  const { slug } = useParams();
  const { language } = useContext(LanguageContext);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchProject = async () => {
      try {
        const url =  `https://funny-activity-cb50ecb0b0.strapiapp.com/api/projects?filters[slug][$eq]=${slug}&populate=*&locale=${language}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.data.length > 0) {
          setProject(data.data[0]);
        } else {
          setError("Projet introuvable.");
        }
      } catch (err) {
        console.error(err);
        setError("Impossible de charger ce projet.");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug, language]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;
  if (!project) return <p>Projet introuvable.</p>;

  return (
    <div>
      <div>
        <Link to="/projects" className="back-link" >
          <Icon icon="bytesize:arrow-left" width="30" />
        </Link>
      </div>

      <div className="detail-container">
        <div>
          <h1>{project.title}</h1>
          <p className="text-block">{project.description}</p>
        </div>
        <div>
          {project.multimedia?.map((media, index) => {
            const url = media.url;
            const mimeType = media.mime;

            if (mimeType.startsWith("image")) {
              return (
                <img
                  key={index}
                  src={url}
                  alt={media.alternativeText || media.name}
                  className="project-media"
                />
              );
            } else if (mimeType.startsWith("video")) {
              return (
                <video key={index} controls className="project-media">
                  <source src={url} type={mimeType} />
                  Votre navigateur ne supporte pas la lecture de cette vidéo.
                </video>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;