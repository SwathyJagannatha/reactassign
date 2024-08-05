import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

const CharacterDetails = () => {
  const { characterID } = useParams();
  console.log("Character ID:", characterID); // Debugging output
  const [character, setCharacter] = useState(null);

  //https://gateway.marvel.com/v1/public/characters/{characterId}?ts=1&apikey=<YOURPUBLICKEY&hash=YOURHASH.

  const fetchCharacterDetails = async () => {
    if (!characterID) {
      console.error("Character ID is undefined");
      return;
    }
    const publicKey = `3113aef1537237b12104d52036ade54f`;
    const hash = `9ba49e6697eb0f5d1bb73a6e7e5713eb`;
    const url = `https://gateway.marvel.com/v1/public/characters/${characterID}?ts=1&apikey=${publicKey}&hash=${hash}`;

    try {
      const response = await axios.get(url);
      if (response.data.data.results.length) {
        const data = response.data.data.results[0];
        setCharacter(data);
        console.log("Fetched character details:", data);
      } else {
        console.log("No character data returned");
      }
    } catch (error) {
      console.error("Error fetching character details:", error);
    }
  };

  useEffect(() => {
    fetchCharacterDetails();
  }, [characterID]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Display the character's name, description, and list of associated comics. */}
      <div className="char-list">
        <h2>Character Detail Info: {characterID}</h2>

        <div className="grid-item">
          <p> Name: {character.name} </p>
          <p> Description : {character.description}</p>
          <img src ={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt = {character.name} className="thumbnail" />
          <p>Comic Info</p>
          <ul>
            {character.comics.items.map(comic=>
                //  <li key={comic.name}>(Comic Name : {comic.name}) (ResourceURI : {comic.resourceURI})</li>
                <li key={comic.resourceURI}>{comic.name}</li>
            )}
          </ul>

          <p>Events: {character.events.available}</p>
          <p>Series: {character.series.collectionURI}</p>
      </div>
      </div>
    </>
  );
};

export default CharacterDetails;
