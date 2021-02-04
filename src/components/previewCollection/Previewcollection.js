import React from 'react';
import './Previewcollection.scss';
import Collectionitem from '../collectionItem/Collectionitem'

function Previewcollection({title, items}) {
    return (
        <div  className='collection-preview'>
            <h1>{title.toUpperCase()}</h1>
            <div className='preview'>

                {
                    items.filter((item, idx) => idx < 4).map(({id, ...otheritemsProps})=> (
                        <Collectionitem key={id} {...otheritemsProps} /> 
                    ))
                }
            
             </div>
        </div>
    )
}

export default Previewcollection;
