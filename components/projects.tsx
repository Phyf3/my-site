import Link from 'next/link'
import styles from '../styles/Home.module.css'
import ProjectCard from "./project_cards";

const Projects = () => {
    return (
        <section 
          id="projects" className={styles.projects}>
          <h1>
            <span>02.</span> <span> Some things I`ve built</span> 
          </h1>

          <div className={styles.cards}>
            <ProjectCard/>
          </div>

          <div className={styles.more}>
            <h2>If you`d like to see more </h2>

            <div className={styles.more__links}>           
              <span><Link href='/archive'> View Project Archive.</Link> </span>
              {/* <span><Link href='/'>Explore Github Repositories.</Link></span> */}
            </div>
          </div>
        </section>
     ) 
}

export default Projects