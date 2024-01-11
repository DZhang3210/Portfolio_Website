import './Stylesheets/FeaturedProjects.css'
import useLocalData from './useLocalData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
const FeaturedProjects = () => {
    const {data: projs, isPending, error} = useLocalData("FeatureProjects");
    return (  
        <div className = "ffeaturedProject-wrapper" id = "projects">
            <div className = "projectTitle">Projects</div>
            <div className = "fprojs-wrapper">
            {projs && projs.map((proj) => (
                    <div class="fproj-post">
                        <img src= {proj.img} alt="Proj Image" class="fproj-image"/>
                        <div className="image-overlay"></div>
                        <div class="fproj-description">
                            <h2 className = "fp-title">{proj.title} <a class = "git" href = {proj.github}><FontAwesomeIcon icon={faGithub}/></a></h2>
                            <p className = "fp-desc">{proj.description} </p>
                        </div>
                    </div>
            ))} 
            </div>
        </div>
    );
}
 
export default FeaturedProjects;