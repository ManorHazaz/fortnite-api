import React from 'react'
import './Tag.css'

function Tag({data}) {
    return (
        <span className='tag'>
            {data}
        </span>
    )
}

export default Tag
