import { React , useState, useEffect, useRef } from 'react';

import './App.css';
import { Loader } from './components/Loader';
import { Modal } from './components/Modal';
import { Weapon } from './components/Weapon';

function App() {
	const loaderRef = useRef('looting...');
	const [weapons,setWeapons] = useState([]);
	const [modalIsOpen,setModalIsOpen] = useState(false);
	const [modalData,setModalData] = useState([]);
	const [limitWeapons, setLimitWeapons] = useState(21);

	// fetching data from api & create observer for the infinite scroll
	useEffect(() => {
		function fetchAPI() 
		{
		const headers = { 'Authorization': 'bca82a6a-7397e9e5-6beeac7d-2ad5882b' }
		fetch('https://fortniteapi.io/v1/loot/list?lang=en', { headers })
			.then(response => response.json())
			.then(data => setWeapons( data.weapons));
		}

		fetchAPI();
		
		const options = {

			root: null,
			rootMargin: '0px',
			treshold: 0.5
		};

		const observer = new IntersectionObserver( loadMore, options );

		observer.observe(document.querySelector('.loader'));

	}, []);

	// remove loader when all weapons rendered
	useEffect(() => 
	{
		// TODO better solution
		if(weapons.length != 0)
		{
			if( limitWeapons >= weapons.length)
			{
				loaderRef.current = '';
			}
		}
	}, [limitWeapons]);

	// increase number of rendered weapons
	function loadMore() 
	{
			setLimitWeapons((prevLimitWeapons) => prevLimitWeapons + 21 );
	}

	// Open and close modal
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
					weapons.slice(0,limitWeapons).map( weapon => 
					(
						<Weapon key={weapon.id} weapon={weapon} toggleModel={toggleModel}/>
					))
				}
			</div>
			<Modal modalIsOpen={modalIsOpen} modalData={modalData} toggleModel={toggleModel} />
			<Loader loaderRef={loaderRef}/>
		</div>
	);
}

export default App;
