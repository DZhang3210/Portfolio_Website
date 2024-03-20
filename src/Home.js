import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import CertificiateListDisplay from './Resume/CertificateListDisplay';

const Home = () => {
    const skills = ['MongoDB', 'React', 'NodeJS', 'Redux', 'Python', 'Java', 'PHP', 'Unity','Rasberry Pi']
    const imageLinks = ['mongoDB.svg','react.png', 'node.png', 'redux.png', 'python.png', 'java.png','PHP.png', 'unity.png', 'rasberry-pi.png']

    return ( 
        <div className = "home-wrapper">
            <div className = "contents">
                <div className = "table_of_contents">
                    <img className = "profile_pic" src = "Profile_Pic.jpg" alt = "GEX"></img>
                    <div className = "contact_info">
                        <div className = "contact">
                                <a className = "email" href = "mailto:davidzhang3210@gmail.com"> <FontAwesomeIcon icon={faEnvelope}/> davidzhang3210@gmail.com</a>
                                <a className = "linkedin" href = "https://www.linkedin.com/in/david-zhang-50b068210/"> <FontAwesomeIcon icon={faLinkedin}/> LinkedIn</a>
                                <a className = "github" href = "https://github.com/DZhang3210"> <FontAwesomeIcon icon={faGithub}/> Github</a>
                                <a className = "cv" href = "Documents/CV.pdf" download><FontAwesomeIcon icon={faFile}/> Cover Letter</a>
                        </div>
                    </div>  
                </div>
                <div className = "home_content">
                    {/* <div className = "eDescription">
                        <div className = "eTitle">Education:</div>
                        <div className = "education">
                            <div className = "eLeft">
                                <div className = "university">NYU B.S. Computer Science (Dec 2024)</div>
                                <div className = "uTime">Minor in Cybersecurity and Mathematics</div>
                            </div>
                            <div className = "eRight">GPA: 3.67</div>
                        </div>
                    </div> */}
                    <div className = "showcase-section">
                        <div className = "projects-title">Recent Projects</div>
                        <div className = "showcase-area">
                            <div className = "showcase_proj">
                                <div className="img-container">
                                    <img src="/pathfinder_demo.gif" alt="Pathfinder Visualizer Gif" />
                                </div>
                                <div className = "showcase_desc">
                                    <div>Pathfinding Visualizer</div>
                                    <p>App to Demonstrate Live Pathfinding Algorithms</p>
                                    <div className = "project-buttons">
                                    <a className = "showcase" href ='http://pathvis.s3-website-us-east-1.amazonaws.com' target="_blank"><FontAwesomeIcon icon={faChevronRight} />Link</a>
                                    <a class = "git" href = 'https://github.com/DZhang3210/Pathfinder' target="_blank"><FontAwesomeIcon icon={faGithub}/>Github</a>
                                </div>
                                </div>
                            </div>
                            <div className = "showcase_proj">
                                <div className="bug-container">
                                    <img className = "bug-image" src="/BugBuddy.png" alt="Pathfinder Visualizer Gif" />
                                </div>
                                <div className = "showcase_desc">
                                    <div>Bug Buddy</div>
                                    <p>Live Bug Tracking and Documentation App</p>
                                    <div className = "project-buttons">
                                    <a className = "showcase" href ='https://bug-frontend-hnc8.onrender.com' target="_blank"><FontAwesomeIcon icon={faChevronRight} />Link</a>
                                    <a class = "git" href = 'https://github.com/DZhang3210/Bug-Buddy' target="_blank"><FontAwesomeIcon icon={faGithub}/>Github</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CertificiateListDisplay/>
                    {/* <div className = "tDescription">
                        <strong>Technical Skills:</strong>
                        <div className = "skill-grid">
                        {skills.map((skill, index)=> (
                            <div key = {index}>
                                <img src = {'Logos/'+imageLinks[index]} alt = "image"/>
                                <span>{skill} </span>
                            </div>
                        ))}
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
 
export default Home;