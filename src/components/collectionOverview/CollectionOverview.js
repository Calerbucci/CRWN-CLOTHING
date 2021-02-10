import React from 'react'
import './CollectionOverview.scss'
import {connect} from 'react-redux'
import Previewcollection from '../../components/previewCollection/Previewcollection'
import {selectCollectionForPreview} from '../../redux/shop/shop-selector'

function CollectionOverview({collections}) {
    return (
        <div className='collection-overview'>
            {
                    collections.map(({id , ...otherProps}) => (
                        <Previewcollection key={id} {...otherProps} />
                    ))
             }
        </div>
    )
}

const mapStateToProps =(state) => ({
    collections: selectCollectionForPreview(state)
})

export default connect(mapStateToProps)(CollectionOverview)
