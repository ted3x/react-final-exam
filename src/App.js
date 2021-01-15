import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import Header from './Components/Navigation/Header'
import MainScreen from './Components/Navigation/MainScreen'
import FindCharacter from './Components/Navigation/FindCharacter'
import Characters from './Components/Navigation/Characters'
import AboutMe from './Components/Navigation/AboutMe'
import React,{ Fragment } from 'react';

const NavBar = () => {
  return <div class="navbar">
    <Link to="/">Main Page</Link>
    <Link to="/character">Find Character</Link>
    <Link to="/characters">Characters</Link>
    <Link to="/about">About me</Link>
  </div>
}

class ParentComponent extends React.Component{

  constructor(props){
    super(props);
  }
  
    render(){
      return(
        <Fragment>
          <Header/>
            <BrowserRouter>
              <NavBar/>
              <Switch>
                <Route path="/"  exact component={MainScreen}/>
                <Route path="/character" exact component={FindCharacter}/>
                <Route path="/characters" exact component={Characters}/>
                <Route path="/about" exact component={AboutMe}/>
              </Switch>
            </BrowserRouter>
        </Fragment>
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
