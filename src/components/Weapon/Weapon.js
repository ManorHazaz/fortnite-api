import FortniteLogo from '../../static/fornite-logo3.png';

import './Weapon.css';

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

        if(searchTag.includes("Rocket"))
        {
            return 'Rockets';
        }

        if(searchTag.includes("SmallBullet"))
        {
            return 'Small Bullets';
        }

        if(searchTag.includes("Shells"))
        {
            return 'Shells';
        }

        if(searchTag.includes("Grenade"))
        {
            return 'Grenades';
        }

        if(searchTag.includes("Blade"))
        {
            return 'Melee';
        }

        if(searchTag.includes("Bow"))
        {
            return 'Arrows';
        }

        if(searchTag.includes("UtilityItem"))
        {
            return 'Utility';
        }

        if(searchTag.includes("Flare"))
        {
            return 'Flares';
        }

        return 'Unknown';
    }

    // function bulletTypeImg(bulletType)
    // {
    //     switch (bulletType) 
    //     {
    //         case 'Light bullets':
    //             return LightBullets;
    //         break;

    //         case 'Medium bullets':
    //             return MediumBullets;
    //         break;

    //         case 'Heavy bullets':
    //             return HeavyBullets;
    //         break;
        
    //         default:
    //             return LightBullets;
    //         break;
    //     }
    // }

    return (
        <div className={`weapon ${weapon.rarity}`} onClick={() => toggleModel(weapon) }>
            <div className='weapon-data'>
                <div className='name'>{ weapon.name }</div>
                <div className='demege'>{ Math.round(weapon.mainStats.DmgPB) }</div>
                <div className='bullet-type'>{ bulletType(weapon) }</div>
            </div>  
            <img src={ weapon.images.icon ? weapon.images.icon : FortniteLogo }/>
        </div>
    )
}

export default Weapon
