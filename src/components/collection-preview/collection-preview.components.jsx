import React from 'react';
import './collection-preview.scss'

const CollectionPreview = ({items,title}) => {
    return (
        <div className='collection-preview'>
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
            {
                items
                .filter((item,idx) => idx < 4)
                .map(item => (
                    <div className="name" key={item.id}>
                    {item.name}
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default CollectionPreview