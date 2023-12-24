const CertificateList = ({certificates}) => {
    //console.log({certificates});
    return ( 
    <div className = "certificateList">
    {
        certificates.map((cert) =>(
            <div className = "certPreview" key = {cert.id}>
                <h2>{cert.title}</h2>
                <h3>{cert.startDate} - {cert.endDate}</h3>
                <img src={`${cert.img}`} alt={cert.img}/>
            </div>
        ))
    }
    </div>
    );
}
 
export default CertificateList;