import { useContext } from 'react';

import { GenButton } from './GenButton';
import { LoadingGens } from '../components/LoadingGens';
import { PokemonContext } from '../context/PokemonContext';

import '../styles/genList.css';

// Desplegable con la lista de generaciones
export const GenList = ({ numOfGenerations, hidden, setHideGens }) => {
	const { loadingGens } = useContext(PokemonContext);
	let genNum = 0;

	return (
		<div className={`gen-list ${hidden ? 'hidden' : ''}`}>
			{loadingGens ? (
				<LoadingGens />
			) : (
				<ul>
					{numOfGenerations.map((gen) => {
						genNum++;
						return (
							<li key={gen.name}>
								<GenButton gen={gen} genNum={genNum} setHideGens={setHideGens} />
							</li>
						);
					})}
				</ul>
			)}
			{genNum > 0 ? <p>Selecciona generación</p> : null}
		</div>
	);
};
