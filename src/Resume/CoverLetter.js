const CoverLetter = ({cv}) => {
    console.log(cv);
    return ( 
    <div className = "coverList">
    {
        cv.map((cover) =>(
            <div className = "coverPreview" key = {cover.id}>
                <h2>{cover.title}</h2>
                <h2>{cover.name}</h2>
                <h2>{cover.email}</h2>
                <h2>{cover.phoneNumber}</h2>
                {
                    cover.content.map((point, index) =>(
                        <p key = {index}>{point}</p>
                    ))
                }
            </div>
        ))
    }
    </div>
    );
}
 
export default CoverLetter;