import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  function handleSearchClick(){
    console.log("Search is clicked")
  }

  return (
    <div className="App">
      <Router>
        {/* <Switch> */}
          <Header Click={handleSearchClick} /> //new
          {/* <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={Aboutpage} /> */}
          <Header />
          <Body />
          <Footer />
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;
