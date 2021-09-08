import React from 'react';
import './collection-preview.scss';
import CollectionItem
 from '../collection-item/collection-item.components';

const CollectionPreview = ({items,title}) => {
    return (
        <div className='collection-preview'>
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
            {
                items
                .filter((item,idx) => idx < 4)
                .map(({id, ...someItemProps}) => (
                    <CollectionItem key={id} {...someItemProps} />
                ))
            }
            </div>
        </div>
    )
}

export default CollectionPreview