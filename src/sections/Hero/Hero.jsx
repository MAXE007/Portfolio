import styles from './HeroStyles.module.css'
import maxImg from '../../assets/max.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import LinkedinLight from '../../assets/linkedin-light.svg'
import LinkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const LinkedinIcon = theme === 'light' ? LinkedinLight : LinkedinDark;


  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={maxImg} alt="Profile picture of Maxi Echegaray" />
            <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" 
            onClick={toggleTheme}
            />
        </div>
        <div className={styles.info}>
            <h1>Maximiliano<br/> Echegaray</h1>
            <h2>Full Stack developer</h2>
            <span>
                <a href="https://github.com/MAXE007?tab=repositories" target="_blank">
                    <img src={githubIcon} alt="Github Icon" />
                </a>
                <a href="https://www.linkedin.com/in/maximiliano-echegaray-a44a05281/" target="_blank">
                    <img src={LinkedinIcon} alt="Linkedin Icon" />
                </a>
            </span>
            <p className={styles.description}>
                Soy técnico en programación con una fuerte pasión por resolver problemas y crear soluciones innovadoras. Me especializo en adaptarme rápidamente a nuevas tecnologías y entornos, lo que me permite aportar valor desde el primer momento.
            </p>
            <a href={CV} download>
                <button className="hover">
                    descargar CV
                </button>
            </a>
        </div>
    </section>
  )
}

export default Hero