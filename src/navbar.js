import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ReactSwitch from 'react-switch'
import { useContext } from 'react'; 
import { ThemeContext } from "./App";

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className="homeSite">
            <header className="navbar">
                <ul className="nav-links">
                    {/* <img src = "home_image.png" alt = "home_image.png"/> */}
                    <li className = "Signature"> <Link to = "/">David Zhang</Link></li>
                    <li className = "button"><Link>Project 1</Link></li>
                    <li className = "button"><Link>Project 2</Link></li>
                    <li className = "button"><Link>Project 3</Link></li>
                    <li className = "button"><Link>Project 4</Link></li>
                    <ReactSwitch onChange = {toggleTheme} checked = {theme === "light"}/>
                    <div className = "setMode">{theme === "light" ? "Light Mode" : "Dark Mode"}</div>
                </ul>
            </header>
        </div>
    );
}

export default Navbar;
