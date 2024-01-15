import { GenButton } from './GenButton';

import '../styles/genList.css';

// Desplegable con la lista de generaciones
export const GenList = ({ numOfGenerations, hidden, setHideGens }) => {
	let genNum = 0;
	
	return (
		<div className={`gen-list-button ${hidden ? 'hidden' : ''}`}>
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
			{genNum > 0 ? <p>Selecciona generación</p> : null}
		</div>
	);
};
