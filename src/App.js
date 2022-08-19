
import logo from "./logo.svg";
import "./App.css";
import "./style/skills.css";
import "./style/projects.css";
import "./style/profile.css";
import Navbar from "./components/navbar";
import Head1 from "./components/head1";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Profile from "./components/profile";
import Contact from "./components/contact";
import About from "./components/about";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  
  return (
    <>
 
  <Navbar></Navbar>
    <Head1></Head1>
      <Skills></Skills>
      <Projects></Projects>
      <Profile />
      <Contact></Contact>
      <About></About>
      <Footer></Footer>
  
     
      
    </>
  );
}

export default App;
