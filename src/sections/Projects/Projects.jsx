import styles from './ProjectsStyles.module.css'
import ProjectCard from '../../common/ProjectCard'
import drums from '../../assets/drums.png'
import quotes from '../../assets/quotes.png'
import calculator from '../../assets/calculator.png'
import shoes from '../../assets/shoes.png'
import game from '../../assets/game.png'


function Projects() {
  return (
    
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projectos</h1>
        <div className={styles.projectsContainer}>
          <ProjectCard 
          src={calculator} 
          link={"https://stately-daifuku-166fdf.netlify.app/"} h3="Calculadora"
          p="Calculadora"
          />
          <ProjectCard 
          src={drums} 
          link={"https://dulcet-melba-337945.netlify.app/"} h3="Batería"
          p="Batería"
          />
          <ProjectCard 
          src={quotes} 
          link={"https://dancing-jelly-cdcfee.netlify.app/"} h3="Frases de Autores"
          p="Frases de Autores"
          />
          <ProjectCard 
          src={shoes} 
          link={"https://deluxe-tarsier-36c5dd.netlify.app/"} h3="Ecommerce"
          p="Shoes"
          />
          <ProjectCard 
          src={game} 
          link={"https://avataraangleyendgame.netlify.app/"} h3="Juego"
          p="Avatar"
          />
        </div>
    </section>
  )
}

export default Projects