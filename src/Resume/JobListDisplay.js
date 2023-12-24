import JobList from "./JobList";
import useFetch from "../useFetch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const JobListDisplay = () => {
    const {data: jobs, isPending, error} = useFetch('http://localhost:8000/jobs')
    return ( 
        <div className = "JobListDisplay" id = "jobs">
            {error && <div>{error}</div>}
            {isPending && <div>"Sorry this hasn't loaded yet"</div>}
            {jobs && <JobList jobs = {jobs}/>}
            {/* <Link className = "goHome" to = "/">Go back Home</Link> */}
        </div>
    );
}
 
export default JobListDisplay;