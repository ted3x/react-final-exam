import React, { Fragment } from 'react';

const characterStyle = {
    display: 'flex',
    flexWrap: 'wrap'
};

const characterChildStyle = {
    flex: '1 0 21%',
    margin: '5px',
    height: '100%',
    width: '100%',
    backgroundColor: 'blue'
};

class Characters extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            characters: [],
            charactersNumber: 20,
            charactersMaxNumber: 20
          }
    }
    
    async componentDidMount(){
        const characters = await fetch("https://rickandmortyapi.com/api/character");
        const charactersResponse = await characters.json();
        console.log(charactersResponse);
        this.setState({
            characters: charactersResponse.results
        })
    }

    render(){
        const decreaseCharacters = () =>{
            if(this.state.charactersNumber > 0) this.setState({charactersNumber : this.state.charactersNumber - 1})
        }

        const increaseCharacters = () =>{
            if(this.state.charactersNumber < this.state.charactersMaxNumber) this.setState({charactersNumber : this.state.charactersNumber + 1})
        }
        return(
            <Fragment>
                <div>
                    <button class="decrease" onClick={decreaseCharacters} type="button">-</button>
                    <input type="text" value={this.state.charactersNumber} onChange={this.state.charactersNumber}></input>
                    <button class="increase" onClick={increaseCharacters} type="button">+</button>
                </div>
                <div className="characters" style={characterStyle}>
                {
                    this.state.characters.slice(0,this.state.charactersNumber).map(character => (
                        <div className="characters-child" style={characterChildStyle}>
                            <h3>{character.name}</h3>
                            <img src={character.image}></img>
                        </div>
                        ))
                }
                </div>
            </Fragment>
        )
    }
}
  
export default Characters;
  