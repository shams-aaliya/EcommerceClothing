import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../collection-preview/collection-preview.components';


export class shop extends Component {
    constructor(props){
        super(props);
        this.state={
            collections:SHOP_DATA
        }
    }
    render() 
    {
        
        return (
            <div className='shop'>
               {
                this.state.collections.map(({id, ...otherProps}) => (
                    <CollectionPreview  key={id} {...otherProps}/>
                ))
               }
            </div>
        )
    }
}

export default shop
