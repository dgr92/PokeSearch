import { useState, useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { GenList } from '../components/GenList';
import { Header } from '../components/Header';
import { PokemonList } from '../components/PokemonList';
import { InstructionsScreen } from '../components/InstructionsScreen';

import '../styles/loading.css';

export const PokeApp = () => {
  const [hideGens, setHideGens] = useState(true);
  const { initialBriefing, numOfGenerations, setNumOfGenerations } = useContext(PokemonContext);

  // Close generation list
  const closeGenMenu = () => {
    setHideGens(true);
    setNumOfGenerations([]);
  };

  return (
    <>
      <Header setHideGens={setHideGens} />
      <main>
        <GenList numOfGenerations={numOfGenerations} hidden={hideGens} setHideGens={setHideGens} />
        {numOfGenerations.length ? (
          <button className="close-button" onClick={closeGenMenu}></button>
        ) : null}
        {initialBriefing ? <InstructionsScreen /> : <PokemonList />}
      </main>
    </>
  );
};
