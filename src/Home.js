import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return ( 
        <div className = "contents" id = "home">
            <div className = "table_of_contents">
                <img src = "ProfilePic.jpeg" alt = "GEX"></img>
                <a href = "#home">David Zhang</a>
                <a href = "#jobs">Jobs</a>
                <a href = "#projects">Projects</a>
                <a href = "#certificates">Certificates</a>
                {/* <a href = "#coverLetter">Cover Letter</a> */}

            </div>
            <div className = "home_content">
                <div className = "contact_info">
                    <h1 className = "name">David Zhang</h1>
                    <div className = "description">Computer Science Junior at NYU</div>
                    <div className = "contact">
                        <a className = "email" href = "mailto:davidzhang3210@gmail.com"> <FontAwesomeIcon icon={faEnvelope}/> davidzhang3210@gmail.com</a>
                        <a className = "linkedin" href = "https://www.linkedin.com/in/david-zhang-50b068210/"> <FontAwesomeIcon icon={faLinkedin}/> LinkedIn</a>
                        <a className = "github" href = "https://github.com/DZhang3210"> <FontAwesomeIcon icon={faGithub}/> Github</a>
                        <a className = "cv" href = "Documents/CV.pdf" download><FontAwesomeIcon icon={faFile}/> Cover Letter</a>
                    </div>
                </div>
                <div className = "aboutMe">
                    <h2 class = "aboutTitle">About Me</h2>
                    <p> I'm currently a junior at NYU doing something


                    </p>
                </div>
            </div>
            
        </div>
    );
}
 
export default Home;