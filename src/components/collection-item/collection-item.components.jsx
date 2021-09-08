import React from 'react'
import './collection-item.styles.scss'

const CollectionItem = ({name,imageUrl,price}) => {
    return (
        <div className='collection-item'>
            <div className="image"
            style={{
                backgroundImage:`url(${imageUrl})`
            }}
            >
            </div>
            <div className="collection-footer">
            <p className="name">{name}</p>
            <p className="price">{price}</p>
            </div>
        </div>
    )
}

export default CollectionItem
