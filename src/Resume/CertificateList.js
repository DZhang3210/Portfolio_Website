const CertificateList = ({certificates}) => {
    //console.log({certificates});
    return ( 
    <div>
        {/* <h1 className = "title">Certificates:</h1> */}
        <div className = "certificateList">
        {
            certificates.map((cert) =>(
                <div className = "certPreview" key = {cert.id}>
                    <img src={`${cert.img}`} alt={cert.img}/>
                    <div className = "cdesc">
                        <h2>{cert.title} ({cert.endDate})</h2>
                        <div>Amazon Web Services</div>
                        <p><i>{cert.description}</i></p>
                    </div>
                </div>
            ))
        }
        </div>
    </div>
    );
}
 
export default CertificateList;