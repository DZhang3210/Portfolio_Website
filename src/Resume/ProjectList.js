import React from 'react';
import { useInView } from 'react-intersection-observer';

const ProjectList = ({ projects }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    return (
        <div className="projectList">
            <h1 className="sectionTitle">Projects <span className = "disclaimer">... hover for more</span></h1>
            {projects.map((project) => (
                <div ref={ref} className={`projectPreview ${inView ? 'fadeIn' : ''}`} key={project.id}>
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
                        <a className = "overlay-link" href = {project.github}>Github</a>
                        <a className = "overlay-link" href = {project.redirect}>Redirect</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
