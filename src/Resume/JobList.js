import React from 'react';
import { useInView } from 'react-intersection-observer';

const JobList = ({ jobs }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5 // Adjust this value as needed
    });

    return (
        <div className="jobList">
            <h1 className="sectionTitle">Jobs</h1>
            {jobs.map((job) => (
                <div ref={ref} className={`jobPreview ${inView ? 'fadeIn' : ''}`} key={job.id}>
                    <div className = "jobHeader">
                        <div className = "jobTitle">
                            <h3>{job.title}</h3>
                        </div>
                        <div className = "jobDate">
                            <h3>{job.startDate} - {job.endDate}</h3>
                        </div>
                    </div>
                    <ul className = "jobDetails">
                        {job.content.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default JobList;
