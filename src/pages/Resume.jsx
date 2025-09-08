import { Icon } from "@iconify/react";

const Resume = () => {
  return (
    <div>
      <h1>Mélody Stephan</h1>
      <h2>Développeur web fullstack et généraliste 3D</h2>
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
        <h3>Compétences</h3>
        <ul>
          <h4>Développement</h4>
          <li>HTML</li>
          <li>CSS/Sass</li>
          <li>Ruby/Ruby on rails</li>
          <li>Base de données SQLite & PostgreSQL</li>
          <li>Javascript/ReactJS</li>
          <li>Git/Github</li>
        </ul>
        <ul>
          <h4>Logiciels 3D</h4>
          <li>Maya</li>
          <li>Arnold</li>
          <li>ZBrush</li>
          <li>Adobe Photoshop</li>
          <li>Substance Painter</li>
          <li>Mari</li>
          <li>Nuke</li>
        </ul>
        <ul>
          <h4>Langues</h4>
          <li>Français ( langue maternelle )</li>
          <li>Anglais ( fluent )</li>
        </ul>
      </div>

      <div>
        <div>
          <h3>Expériences Professionnelles</h3>
          <ul>
            <li>
              <h4>Généraliste 3D</h4>
              <p>Février 2023 - Février 2024</p>
              <ul>
                <li>Modeling/texturing pour le département RA.</li>
                <li>Modeling, UV mapping et optimisation d'assets pour plusieurs publicités.</li>
                <li>Set dressing d'environnements et lighting de plusieurs shots dans Maya.</li>
                <li>Gestion des rendus d'images sur Deadline.</li>
                <li>Compositing de certains shots sur Nuke et Aftereffects.</li>
              </ul>
            </li>
            <li>
              <h4>Stagiaire généraliste 3D</h4>
              <p>Septembre 2022- Décembre 2022</p>
              <ul>
                <li>Modeling/texturing pour le département RA.</li>
                <li>Modeling, UV mapping et optimisation d'assets pour une publicité.</li>
                <li>Texturing et création de shaders.</li>
              </ul>
            </li>
            
          </ul>
        </div>

        <div>
          <h3>Formations</h3>
          <ul>
            <li>
              <h4>formation Developpement Web</h4>
              <p>mai 2025 - aujourd'hui</p>
              <p>The Hacking project</p>
            </li>
            <li></li>
              <h4>Bachelor Animation 3D & Jeux Vidéo</h4>
              <p>2019 - 2022</p>
              <p>Bellecour école</p>
            <li>
              <h4>Prépa/MANAA ( Mise à Niveau en Arts Appliquées )</h4>
              <p>2018 - 2019</p>
              <p>LISAA ( Institut Supérieur des Arts Appliqués )</p>
            </li>
            <li>
              <h4>Baccalauréat Scientifique</h4>
              <p>2015 - 2018</p>
              <p>Lycée Camille sée</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Resume;