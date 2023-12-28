import CoverLetter from "./CoverLetter";
import useFetch from "../useFetch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import useLocalData from "../useLocalData";
const CoverLetterDisplay = () => { 
    //const {data: cover, isPending, error} = useFetch('http://localhost:8000/coverletter')
    const {data: cover, isPending, error} = useLocalData("coverletter");
    return ( 
        <div className = "CoverLetterDisplay" id = "coverLetter">
            {error && <div>{error}</div>}
            {isPending && <div>"Sorry this hasn't loaded yet"</div>}
            {cover && <CoverLetter cv = {cover}/>}
            {/* <Link className = "goHome" to = "/">Go back Home</Link> */}
        </div>
    );
}
 
export default CoverLetterDisplay;