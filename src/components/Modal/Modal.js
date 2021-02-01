import { React ,useState } from 'react';
import ReactDOM from 'react-dom';
import { StatsTable } from './components/StatsTable';
import { Tag } from './components/Tag';

import './Modal.css'

function Modal({modalIsOpen, modalData, toggleModel}) {
    const [showDescription,setShowDescription] = useState(true);
    const [showStats,setShowStats] = useState(false);

    if(modalIsOpen)
    {
        const tags = modalData.searchTags.split(' ');

        return ReactDOM.createPortal(
            <>
                <div className='overlay'></div>
                <div className={`modal ${modalData.rarity}`}>
                    <button className='exit-modal' onClick={ () => toggleModel() }> X </button>
                    <div className='title'>
                        <h2 className='name'>{ modalData.name }</h2>
                        <div className='tags'>
                            {tags.map(tag => 
                                <Tag key={tag} data={tag} />
                            )}
                        </div>
                        <img className='weapon-img' src={ modalData.images.icon }/>
                    </div>
                    <div className='data'>
                        <div className='tabs'>
                            <span className={`tab ${showDescription && 'active'}`} onClick={() => !showDescription && setShowDescription(true) & setShowStats(false) }>Description</span>
                            <span className={`tab ${showStats && 'active'}`} onClick={() => !showStats && setShowStats(true) & setShowDescription(false) }>Stats</span>   
                        </div>
                        { showDescription &&
                            <div className='info description'>
                                    {!modalData.description ? 'There is no description on this weapon' : modalData.description}
                            </div>
                        }
                        { showStats &&
                            <div className='info stats' >
                                <StatsTable key={modalData.id} stats={modalData.mainStats}/>
                            </div>
                        }
                    </div>
                </div>
            </>,
            document.getElementById('modal-root')
        )
    }
    else
    return null
}

export default Modal
