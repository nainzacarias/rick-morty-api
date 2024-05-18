import React from 'react';

export default function Characters(props){
    const {characters} = props;
    console.log(characters);

    return(
        <div className="characters">
            <h>Personajes</h>
            <span className="back-home">Home </span>
            <div className="container-characters">
                {characters.map((characters, index) => (
                    <div className="character-container" key={index}>
                        <img src={characters.image} alt={characters.name}></img>
                        <div>
                            <h3>{characters.name}</h3>
                            <h6>
                                {characters.status === 'Alive' ? (
                                    <>
                                    <span className="alive"> Vivo </span>
                                    </>
                                ): (
                                    <>
                                    <span className="dead"> Muerto </span>
                                    </>
                                )
                                }
                            </h6>
                            <p>
                                <span className="text-grey">Episodios: </span>
                                <span>{characters.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey">Especie: </span>
                                <span>{characters.species}</span>
                            </p>
                        </div>
                    </div>
                
                )
                )}
            </div>
        </div>
    )
}