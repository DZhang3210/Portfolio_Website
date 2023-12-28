import './Stylesheets/LogoBoard.css'
const LogoBoard = () => {
    return ( 
        <div className = "LogoBoard">
            <h1 className = "title">Skills</h1>
            <div className = "logos">
                <img src = "Logos/mongoDB.svg"></img>
                <img src = "Logos/react.png"></img>
                <img src = "Logos/node.png"></img>
                <img src = "Logos/python.png"></img>
                <img src = "Logos/java.png"></img>
                <img src = "Logos/PHP.png"></img>
                <img src = "Logos/unity.png"></img>
                <img src = "Logos/rasberry-pi.png"></img>
            </div>
        </div>
    );
}
 
export default LogoBoard;