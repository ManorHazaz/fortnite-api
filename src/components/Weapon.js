import LightBullets from '../static/Light-bullets.png'; 
import MediumBullets from '../static/Medium-bullets.png'; 
import HeavyBullets from '../static/Heavy-bullets.png'; 
import Modal from './Modal';

function Weapon({weapon, toggleModel}) {

    function bulletType(weapon) 
    {
        const searchTag = weapon.searchTags;
        
        if(searchTag.includes("LightBullets"))
        {
            return 'Light bullets';
        }

        if(searchTag.includes("MediumBullets"))
        {
            return 'Medium bullets';
        }

        if(searchTag.includes("HeavyBullets"))
        {
            return 'Heavy bullets';
        }

        return 'Unknown';
    }

    function bulletTypeImg(bulletType)
    {
        switch (bulletType) 
        {
            case 'Light bullets':
                return LightBullets;
            break;

            case 'Medium bullets':
                return MediumBullets;
            break;

            case 'Heavy bullets':
                return HeavyBullets;
            break;
        
            default:
                return LightBullets;
            break;
        }
    }

    return (
        <div className={`weapon ${weapon.rarity}`} onClick={() => toggleModel(weapon) }>
            <div className='weapon-data'>
                <div className='name'>{ weapon.name }</div>
                <div className='demege'>{ weapon.mainStats.DmgPB }</div>
                <div className='bullet-type'>{ bulletType(weapon) }</div>
            </div>
            {console.log(weapon)}            
            <img src={ weapon.images.icon }/>
        </div>
    )
}

export default Weapon
