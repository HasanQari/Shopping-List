import React from 'react';

import './ShoppingList.css';

const ShoppingList = props => {
    return (
        <div>
            <ul className="ShoppingList">
                {props.items.map(item => {
                    return <li key={item.id}>{item.ele}</li>;
                })}
            </ul>
        </div>
    );
}

export default ShoppingList;