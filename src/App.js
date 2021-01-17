import './App.css';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import Header from './Components/header'
import MainScreen from './Components/MainScreen/mainScreen'
import FindCharacter from './Components/FindCharacter/findCharacter'
import Characters from './Components/Characters/characters'
import Character from './Components/FindCharacter/character'
import {SignUp} from './Components/signUp'
import AboutMe from './Components/AboutMe/aboutMe'
import Footer from './Components/footer'
import React,{ Fragment } from 'react';



class ParentComponent extends React.Component{

  constructor(props){
    super(props);
  }
  
    render(){
      return(
        <Fragment>
              <BrowserRouter>
                <Header/>
                <Switch>
                <div id="wrapper">
                  <div id="content">
                    <Route path="/"  exact component={MainScreen}/>
                    <Route path="/characters" exact component={Characters}/>
                    <Route path="/character" exact component={Character}/>
                    <Route path="/sign-up" exact component={SignUp}/>
                    <Route path="/about" exact component={AboutMe}/>
                  </div>
                </div>
                </Switch>
              </BrowserRouter>
          <Footer/>
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
