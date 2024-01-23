import { GenButton } from './GenButton';

import '../styles/genList.css';

// List of generations
export const GenList = ({ numOfGenerations, hidden, setHideGens }) => {
	let genNum = 0;

	return (
		<div className={`gen-list ${hidden ? 'hidden' : 'visible'}`}>
			<p>Selecciona generación</p>

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
		</div>
	);
};
