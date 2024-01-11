import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ReactSwitch from 'react-switch'
import { useContext, useEffect} from 'react'; 
import { ThemeContext } from "./App";
import "./Stylesheets/navbar.css"
const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        const handleScroll = () => {
            var navbar = document.getElementById('navbar');
            if (window.scrollY > 30) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        // Add the event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures this runs once on mount

    return (
        <div className="homeSite">
            <header className="navbar" id = "navbar">
                <ul className="nav-links">
                    <li className = "Signature"> <Link to = "/">David Zhang</Link></li>
                </ul>
            </header>
        </div>
    );
}

export default Navbar;
