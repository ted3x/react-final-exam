import React from 'react';
import {  Link } from 'react-router-dom';

class FindCharacter extends React.Component{

  constructor(props){
      super(props);
      this.state ={
          characterName: ""
        }
  }

  handleChange = (e) => {
    this.setState({ characterName: e.target.value });
  }

  render(){
      return(
        <div className="navbar-item-link-search">
          <input type="text" onChange={ this.handleChange}></input>
          <Link to={{ pathname: '/character', state: { characterName: this.state.characterName}}}>
            <input type="button" value="Find character"></input>
          </Link>
        </div>
      )
  }
}
export default FindCharacter;