import React from 'react'

function StatsTable({stats}) {
    
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
                    <td className='stat-value'>{calculateDPS()}</td>
                    <td className='stat-range'><div className="div-stat-range"></div></td>
                </tr>
                {
                    Object.entries(stats).map(([key, value]) => 
                        <tr>
                            <td className='stat-key'>{orderStatName(key)}</td>
                            <td className='stat-value'>{value}</td>
                            <td className='stat-range'><div className="div-stat-range"></div></td>
                            {console.log(key)}
                        </tr>
                    )
                }
                {console.log(stats)}
            </tbody>
        </table>
    )
}

export default StatsTable
