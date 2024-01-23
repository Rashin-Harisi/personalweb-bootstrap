
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import NavBar from './components/navbar/navbar';
import SlideShows from './components/slideshows/slideshows';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <SlideShows/>
      <Footer/>
    </div>
  );
}

export default App;
