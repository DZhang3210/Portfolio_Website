import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useInView } from 'react-intersection-observer';
import {faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

const ProjectList = ({ projects }) => {

    return (
        <div className="projectList">
            <h1 className="sectionTitle">More Projects</h1>
            {projects.map((project) => (
                <div className='projectPreview' key={project.id}>
                    <div className="projectHeader">
                        <div className="projectTitle">
                            <h2>{project.title}</h2>
                        </div>
                        <div className="projectDate">
                            <h3>{project.startDate} - {project.endDate}</h3>
                        </div>
                    </div>
                    <ul className="projectDetails">
                        {project.content.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                    <div className = "overlay">
                        { project.github !== null ? <a className = "overlay-link" href = {project.github}> <FontAwesomeIcon icon = {faGithub}/> Github</a> : <div></div>}
                        {project.redirect !== null ? <a className = "overlay-link" href = {project.redirect}> <FontAwesomeIcon icon={faLocationArrow} /> Redirect</a> : <div></div>}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
