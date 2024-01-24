
import './App.css';
import Home from './components/Home/home';
import AboutMe from './components/aboutMe/aboutMe';
import Layout from './components/layout/layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './components/projects/projects';
import Contact from './components/contactMe/contact';
import FormHelp from './components/form/form';


function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/aboutMe' element={<AboutMe/>} />
            <Route path='/projects' element={<Projects/>} />  
            <Route path='/contactMe' element={<Contact/>} />
            <Route path='/form' element={<FormHelp/>} />
          </Routes>
        </Layout>
      </Router>

    </div>
  );
}

export default App;
