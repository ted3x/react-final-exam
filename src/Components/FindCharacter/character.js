import React from 'react';

class Character extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            character: null
          }
    }

    async componentDidMount(){
        var name = this.props.location.state.characterName;
        if(name === 'undefined' || name == "") return false;
        const character = await fetch("https://rickandmortyapi.com/api/character/?name=" + name);
        const characterResponse = await character.json();
        if(characterResponse.results !== undefined){
            this.setState({
                character: characterResponse.results[0]
            })
        }
    }

    render(){
        return(
            this.state.character? <div className="characters-child">
                <h3>{this.state.character.name}</h3>
                <img src={this.state.character.image}></img>
            </div> : <p>Character not found</p>
        )
    }
}
  
export default Character;
  