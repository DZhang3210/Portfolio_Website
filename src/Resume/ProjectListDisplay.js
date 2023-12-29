import ProjectList from "./ProjectList";
import useFetch from "../useFetch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import useLocalData from "../useLocalData";
const ProjectListDisplay = () => {
    //const {data: projs, isPending, error} = useFetch('http://localhost:8000/projects')
    const {data: projs, isPending, error} = useLocalData("projects");
    return ( 
        <div className = "ProjectListDisplay">

            {error && <div>{error}</div>}
            {isPending && <div>"Sorry this hasn't loaded yet"</div>}
            {projs && <ProjectList projects = {projs}/>}
            {/* <Link className = "goHome" to = "/">Go back Home</Link> */}
            
        </div>
    );
}
 
export default ProjectListDisplay;