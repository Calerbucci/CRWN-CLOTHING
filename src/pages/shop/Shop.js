import React from 'react';
import Shopdata  from './Shopdata.js';
import Previewcollection from '../../components/previewCollection/Previewcollection'

class Shop extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collections : Shopdata
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'> 
                {
                    collections.map(({id , ...otherProps}) => (
                        <Previewcollection key={id} {...otherProps} />
                    ))
                }

            
            </div>);
    }


}


export default Shop;