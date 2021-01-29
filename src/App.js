import { React , useState, useEffect } from 'react';

import './App.css';
import Weapon from './components/Weapon';

function App() {
	const [weapons,setWeapons] = useState([]);

	useEffect(() => {
		const headers = { 'Authorization': 'bca82a6a-7397e9e5-6beeac7d-2ad5882b' }
		fetch('https://fortniteapi.io/v1/loot/list?lang=en', { headers })
			.then(response => response.json())
			.then(data => setWeapons( data.weapons));
	}, []);

	return (
		<div className="App">
			<div className='weapons'>
				{
					weapons.slice(0,20).map( weapon => 
					(
						<Weapon key={weapon.id} weapon={weapon} />
					))
				}
			</div>
		</div>
	);
}

export default App;
