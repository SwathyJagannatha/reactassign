import React, { useState } from "react";
import {Routes, Route} from 'react-router-dom'
import { Home } from './Home';
import "./AppStyles.css"
import CharacterList from "./CharacterList";
import CharacterDetails from "./CharacterDetail";
import Modal from './Modal'
import { Comics } from "./Comics";
import { NotFound } from './Notfound';

function App() {
  const [selectedCharacter,setSelectedCharacter] = useState(null);
  const [isModalOpen,setIsModalOpen] = useState(false);

  const handleCharacterSelect = (characterID) => {
    setSelectedCharacter(characterID); 
    setIsModalOpen(true);
  };

  const handleCloseModal = () =>{
    setIsModalOpen(false);
  };
  
  return (
     <div className='app-container'>
      <Routes>
        {/* Add home page */}
        <Route path='/' element={ <Home/> } />
        <Route path='/characters' element={ <CharacterList/> }/>
        <Route path='/characters/:id' element={ <CharacterDetails/> }/>
        <Route path='/displayComics' element={ <Comics/> }/>
         {/* Setting a default page if the path doesn't match anything */}
         <Route path="*" element={<NotFound />}/>
     </Routes>
     </div>
  );
}

export default App;
