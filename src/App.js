import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './navbar.js';
import JobListDisplay from './Resume/JobListDisplay.js';
import ProjectListDisplay from './Resume/ProjectListDisplay.js';
import CertificiateListDisplay from './Resume/CertificateListDisplay.js';
import CoverLetterDisplay from './Resume/CoverLetterDisplay.js';
import Home from './Home.js';
import {createContext, useState} from 'react'
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    console.log(theme);
  }
  return (
    <ThemeContext.Provider value = {{theme, toggleTheme}}>
    <Router>
      <div className="App" id = {theme}>
        <Navbar/>
        <Switch>
          <Route exact path = "/">
            <Home/>
            <JobListDisplay/>
            <ProjectListDisplay/>
            <CertificiateListDisplay/>
          </Route>
          {/* <Route path = "/JobList" component = {JobListDisplay}></Route>
          <Route path = "/ProjectList" component = {ProjectListDisplay}></Route>
          <Route path = "/CertificateList" component = {CertificiateListDisplay}></Route>
          <Route path = "/CoverLetter" component = {CoverLetterDisplay}></Route> */}
        </Switch>
      </div>
    </Router>
    </ThemeContext.Provider>
  );
}

export default App;
