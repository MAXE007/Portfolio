import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'
import freshBurguer from '../../assets/fresh-burger.png'
import hipsster from '../../assets/hipsster.png'
import ProjectCard from '../../common/ProjectCard'


function Projects() {
  return (
    
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projectos</h1>
        <div className={styles.projectsContainer}>
          <ProjectCard 
          src={viberr} 
          link={"https://stately-daifuku-166fdf.netlify.app/"} h3="Calculadora"
          p="Calculadora"
          />
          <ProjectCard 
          src={freshBurguer} 
          link={"https://dulcet-melba-337945.netlify.app/"} h3="Batería"
          p="Batería"
          />
          <ProjectCard 
          src={hipsster} 
          link={"https://dancing-jelly-cdcfee.netlify.app/"} h3="Frases de Autores"
          p="Frases de Autores"
          />
          <ProjectCard 
          src={viberr} 
          link={"https://deluxe-tarsier-36c5dd.netlify.app/"} h3="Ecommerce"
          p="Shoes"
          />
          <ProjectCard 
          src={viberr} 
          link={"https://comfy-druid-7fc15d.netlify.app/"} h3="Juego"
          p="Avatar"
          />
          <ProjectCard 
          src={viberr} 
          link={"https://github.com/MAXE007"} h3="Viberr"
          p="Streaming App"
          />
          <ProjectCard 
          src={viberr} 
          link={"https://github.com/MAXE007"} h3="Viberr"
          p="Streaming App"
          />
        </div>
    </section>
  )
}

export default Projects