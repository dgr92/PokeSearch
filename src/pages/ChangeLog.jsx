import { Link } from 'react-router-dom';

import '../styles/changeLog.css';

export const ChangeLog = () => {
	return (
		<div className='changelog'>
			<h1>Lista de cambios:</h1>
			<div className='version'>
				<h2>v1.0:</h2>
				<div className='version-specs'>
					<p>
						Este proyecto es una pokédex creada mediante la <a href='https://pokeapi.co/docs/v2'>PokeAPI</a>.
					</p>
					<p>Permite a los usuarios buscar pokémon por generación.</p>
					<p>
						Los pokémon aparecen en formato carta, pasando el raton por los botones &quot;Normal&quot; y &quot;Shiny&quot; cambiará el color
						de la imagen, y si se hace click en la carta se puede ver la cara trasera.
					</p>
					<p>De esos pokémon podremos ver:</p>
					<ul>
						<li>· Número.</li>
						<li>· Nombre.</li>
						<li>· Imágenes (Normal y Shiny). </li>
						<li>· Tipos.</li>
						<li>· Descripción.</li>
						<li>· Pre-evoluciones y evoluciones.</li>
						<li>· Estadísticas.</li>
					</ul>
					<p>Además:</p>
					<ul>
						<li>· Con el buscador se pueden buscar pokémon de la generación que tengamos cargada en ese momento.</li>
						<li>· Con el botón &quot;Voltear todas&quot; podemos girar todas las cartas a la vez.</li>
						<li>· Con &quot;Cambiar a Shiny/Cambiar a Normal&quot; podemos cambiar todos los colores a la vez.</li>
					</ul>
				</div>
			</div>

			<Link className='back-button' to='/'>
				Volver
			</Link>
		</div>
	);
};
