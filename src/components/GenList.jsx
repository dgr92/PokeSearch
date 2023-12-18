import { GenButton } from './GenButton';

// Desplegable con la lista de generaciones
export const GenList = ({ numOfGenerations }) => {
    let genNum = 0;
	return (
		<ul className='gen-list-button'>
			{numOfGenerations.map((gen) => {
                genNum++;
				return (
					<li key={gen.name}>
						<GenButton gen={gen} genNum={genNum} />
					</li>
				);
			})}
		</ul>
	);
};
