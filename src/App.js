import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MyProjects from "./Components/MyProjects";
import Skills from "./Components/Skills";


function App() {
  return (
    <div>
      <Header></Header>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <MyProjects></MyProjects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
