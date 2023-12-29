import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ReactSwitch from 'react-switch'
import { useContext } from 'react'; 
import { ThemeContext } from "./App";
import "./Stylesheets/navbar.css"
const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className="homeSite">
            <header className="navbar">
                <ul className="nav-links">
                    {/* <img src = "home_image.png" alt = "home_image.png"/> */}
                    <li className = "Signature"> <Link to = "/">David Zhang</Link></li>
                    <li className = "Signature"> <a href = "#home">Home</a></li>
                    <li className = "Signature"> <a href = "#skills">Skills</a></li>
                    <li className = "Signature"> <a href = "#projects">Projects</a></li>
                    <div className = "light-switch">
                        <ReactSwitch onChange = {toggleTheme} checked = {theme === "dark"}/>
                        <div className = "setMode">{theme === "light" ? "Light Mode" : "Dark Mode"}</div>
                    </div>
                </ul>
            </header>
        </div>
    );
}

export default Navbar;
