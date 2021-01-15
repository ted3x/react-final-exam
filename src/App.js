import './App.css';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import Header from './Components/Navigation/Header'
import MainScreen from './Components/Navigation/MainScreen/MainScreen'
import FindCharacter from './Components/Navigation/FindCharacter'
import Characters from './Components/Navigation/Characters'
import SignUp from './Components/Navigation/SignUp'
import AboutMe from './Components/Navigation/AboutMe/AboutMe'
import React,{ Fragment } from 'react';

const NavBar = () => {
  return <Fragment>
    <div class="navbar">
      <div className="navbar-item">
        <Link to="/">Main Page</Link>
      </div>
      <div className="navbar-item">
        <Link to="/character">Find Character</Link>
      </div>
      <div className="navbar-item">
        <Link to="/characters">Characters</Link>
      </div>
      <div className="navbar-item">
        <Link to="/sign-up">Sign up</Link>
      </div>
      <div className="navbar-item">
        <Link to="/about">About me</Link>
      </div>
    </div>
  </Fragment>
}

class ParentComponent extends React.Component{

  constructor(props){
    super(props);
  }
  
    render(){
      return(
        <div className="container">
        <Fragment>
          <Header/>
            <BrowserRouter>
              <NavBar/>
              <Switch>
                <Route path="/"  exact component={MainScreen}/>
                <Route path="/character" exact component={FindCharacter}/>
                <Route path="/characters" exact component={Characters}/>
                <Route path="/sign-up" exact component={SignUp}/>
                <Route path="/about" exact component={AboutMe}/>
              </Switch>
            </BrowserRouter>
        </Fragment>
        </div>
      )
    }
}


function App() {
  return (
    <>
      <ParentComponent></ParentComponent>
    </>
  );
}

export default App;
