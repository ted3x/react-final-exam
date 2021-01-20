import React, { Fragment } from 'react';
import Character from '../FindCharacter/character'

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
            charactersMaxNumber: 20,
            hiddenElements: []
          }
    }

    decreaseCharacters = () =>{
        if(this.state.charactersNumber > 0) this.setState({charactersNumber : this.state.charactersNumber - 1})
    }

    increaseCharacters = () =>{
        if(this.state.charactersNumber < this.state.charactersMaxNumber) this.setState({charactersNumber : this.state.charactersNumber + 1})
    }

    hideComponent = (id) =>{
        if(this.state.hiddenElements.includes(id)) return false
        else{
            this.state.hiddenElements.push(id)
            this.setState({hiddenElements : this.state.hiddenElements})
        } 
        console.log(this.state.hiddenElements)
    }

    drawCharacter = (character) =>{
        if(this.state.hiddenElements.includes(character.id)){
            console.log(character.id)
            return null
        } 
        else return <Character id={character.id} character={character} component={this.hideComponent}/>
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
        return(
            <Fragment>
                <div>
                    <button class="decrease" onClick={this.decreaseCharacters} type="button">-</button>
                    <input type="text" value={this.state.charactersNumber} onChange={this.state.charactersNumber}></input>
                    <button class="increase" onClick={this.increaseCharacters} type="button">+</button>
                </div>
                <div className="characters" style={characterStyle} onChange={this.state.hiddenElements}>
                {
                    this.state.characters.slice(0,this.state.charactersNumber).map(character => (
                        this.drawCharacter(character)))
                }
                </div>
            </Fragment>
        )
    }
}
  
export default Characters;
  