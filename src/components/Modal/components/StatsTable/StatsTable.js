import React from 'react'

import './StatsTable.css';

function StatsTable({stats}) {

    const maxStats = {
        'DPS': 600,
        'DmgPB': 300,
        'FiringRate': 15,
        'ClipSize': 100,
        'ReloadTime': 12,
        'BulletsPerCartridge': 13,
        'Spread': 2.5,
        'SpreadDownsights': 1,
        'DamageZone_Critical': 2.5
    }
    
    function orderStatName(name) 
    {
        switch (name) {
            case 'DmgPB':
                return 'Demage';
        
            default:
                name = name.replace('_', ' ');
                name = name.replace(/([A-Z])/g, ' $1').trim();
                return name;
        }
    }

    function calculateDPS() 
    {
        return stats['DmgPB'] * stats['FiringRate'];
    }

    return (
        <table>
            <tbody>
                <tr>
                    <td className='stat-key'>DPS</td>
                    <td className='stat-value'>{Math.round(calculateDPS())}</td>
                    <td className='stat-range'><div className='div-stat-range' style={{ '--percentage': `${ (calculateDPS()/maxStats['DPS'])*100 }%` }}></div></td>
                </tr>
                {
                    Object.entries(stats).map(([key, value]) => 
                        <tr>
                            <td className='stat-key'>{orderStatName(key)}</td>
                            <td className='stat-value'>{key == 'ClipSize' & value == 0 ? '∞' : value}</td>
                            <td className='stat-range'><div className='div-stat-range' style={{ '--percentage': `${ (value/maxStats[key])*100 }%` }}></div></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default StatsTable
