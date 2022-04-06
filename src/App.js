import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';


function App() {

  function handleSearchClick(){
    console.log("Search is clicked")
  }

  return (
    <div className="App">
    <Header Click={handleSearchClick}/>
    <Body />
    <Footer />
    </div>
  );
}

export default App;
