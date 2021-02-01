import React from 'react';

import './Loader.css';

function Loader({loaderRef}) {
    return (
        <div className="loader" > 
            {loaderRef.current}
        </div>
    )
}

export default Loader;
