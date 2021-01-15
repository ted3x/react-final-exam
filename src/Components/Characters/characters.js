import React from 'react';
import './characters.css'

class Characters extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            characters: []
          }
    }

    async componentDidMount(){
        const characters = await fetch("https://rickandmortyapi.com/api/character");
        const charactersResponse = await characters.json();
        console.log(charactersResponse.results);
        this.setState({
            characters: charactersResponse.results
        })
    }

    render(){
        return(
                <div className="characters">
                {
                    this.state.characters.map(character => (
                        <div className="characters-child">
                            <h3>{character.name}</h3>
                            <img src={character.image}></img>
                        </div>
                        ))
                }
                </div>
        )
    }
}
  
export default Characters;
  