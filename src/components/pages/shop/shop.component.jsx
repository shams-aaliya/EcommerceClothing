import React, { Component } from 'react';
import SHOP_DATA from './shop.data';

export class shop extends Component {
    constructor(){
        super();
        this.state={
            collections:SHOP_DATA
        }
    }
    render() {
        return (
            <div>
                <h1>SHOP</h1>
            </div>
        )
    }
}

export default shop
