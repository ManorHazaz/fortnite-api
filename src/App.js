import { React , useState, useEffect } from 'react';

import './App.css';
import Biggest from './components/Biggest';
import Modal from './components/Modal';
import Weapon from './components/Weapon';

function App() {
	const [weapons,setWeapons] = useState([]);
	const [modalIsOpen,setModalIsOpen] = useState(false);
	const [modalData,setModalData] = useState([]);

	useEffect(() => {
		const headers = { 'Authorization': 'bca82a6a-7397e9e5-6beeac7d-2ad5882b' }
		fetch('https://fortniteapi.io/v1/loot/list?lang=en', { headers })
			.then(response => response.json())
			.then(data => setWeapons( data.weapons));
	}, []);

	function toggleModel(weapon=[]) 
	{
		setModalData(weapon);
		setModalIsOpen(!modalIsOpen);
	}

	return (
		<div className="App">
			<h1>FORTNITE WEAPONS</h1>
			<div className='weapons'>
				{
					weapons.slice(0,20).map( weapon => 
					(
						<Weapon key={weapon.id} weapon={weapon} toggleModel={toggleModel}/>
					))
				}
			</div>
			<Modal modalIsOpen={modalIsOpen} modalData={modalData} toggleModel={toggleModel} />
			<Biggest weapons={weapons} />
		</div>
	);
}

export default App;
