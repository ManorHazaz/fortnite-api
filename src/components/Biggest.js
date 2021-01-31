import { React , useState } from 'react';

function Biggest({weapons}) {
    const [DPS,setDPS] = useState(0);
    const [DmgPB,setDmgPB] = useState(0);
    const [FiringRate,setFiringRate] = useState(0);
    const [ClipSize,setClipSize] = useState(0);
    const [ReloadTime,setReloadTime] = useState(0);
    const [BulletsPerCartridge,setBulletsPerCartridge] = useState(0);
    const [Spread,setSpread] = useState(0);
    const [SpreadDownsights,setSpreadDownsights] = useState(0);
    const [DamageZoneCritical,setDamageZoneCritical] = useState(0);

    function order() 
    {
        weapons.map( weapon => 
        {
            var tempDPS = weapon.mainStats['DmgPB'] * weapon.mainStats['FiringRate'];
            if(tempDPS > DPS)
            {
                setDPS(tempDPS);
            }

            Object.entries(weapon.mainStats).map(([key, value]) =>
            {
                switch (key) {
                    case 'DmgPB':
                        value > DmgPB && setDmgPB(value)
                        break;
                
                    case 'FiringRate':
                        value > FiringRate && setFiringRate(value)
                        break;
                
                    case 'ClipSize':
                        value > ClipSize && setClipSize(value)
                        break;
                
                    case 'ReloadTime':
                        value > ReloadTime && setReloadTime(value)
                        break;
                
                    case 'BulletsPerCartridge':
                        value > BulletsPerCartridge && setBulletsPerCartridge(value)
                        break;
                
                    case 'Spread':
                        value > Spread && setSpread(value)
                        break;
                
                    case 'SpreadDownsights':
                        value > SpreadDownsights && setSpreadDownsights(value)
                        break;
                
                    case 'DamageZoneCritical':
                        value > DamageZoneCritical && setDamageZoneCritical(value)
                        break;
                
                    default:
                        break;
                }
            })
        })
        console.log('DPS',DPS)
        console.log('DmgPB', DmgPB)
        console.log('FiringRate', FiringRate)
        console.log('ClipSize', ClipSize)
        console.log('ReloadTime', ReloadTime)
        console.log('BulletsPerCartridge', BulletsPerCartridge)
        console.log('Spread', Spread)
        console.log('SpreadDownsights', SpreadDownsights)
        console.log('DamageZoneCritical', DamageZoneCritical)
    }

    return (
        <div>
            {
                order()
            }
            
        </div>
    )
}

export default Biggest