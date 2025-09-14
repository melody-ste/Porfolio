import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const ProjectDetail = () => {

  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchProject = async () => {
      try {
        const url = `https://funny-activity-cb50ecb0b0.strapiapp.com/api/projects?filters[slug][$eq]=${slug}&populate=*`;
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
  }, [slug]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;
  if (!project) return <p>Projet introuvable.</p>;

  return (
    <div>
      <div>
        <Link to="/projects" >
          <Icon icon="bytesize:arrow-left" width="30" />
        </Link>
      </div>

      <div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectDetail;