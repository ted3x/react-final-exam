import React, { Fragment } from 'react'

export const Character = (props) => {
    return (
        <Fragment>
            {props.characters.map(character => (
                <div>
                <h3>{character.name}</h3>
                <img src={character.image}></img>
            </div>))}
        </Fragment>
    );
  };