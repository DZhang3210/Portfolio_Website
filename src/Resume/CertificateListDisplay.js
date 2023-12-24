import CertificateList from "./CertificateList";
import useFetch from "../useFetch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CertificiateListDisplay = () => {
    const {data: certs, isPending, error} = useFetch('http://localhost:8000/certificates')
    return ( 
        <div className = "CertificateListDisplay" id = "certificates">

            {error && <div>{error}</div>}
            {isPending && <div>"Sorry this hasn't loaded yet"</div>}

            {certs && <CertificateList certificates = {certs}/>}
            {/* <Link className = "goHome" to = "/">Go back Home</Link> */}
            
        </div>
    );
}
 
export default CertificiateListDisplay;