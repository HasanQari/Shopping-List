import React, { useState } from 'react';

import './AddItem.css';

const AddItems = props => {

    const [enteredItem, setInputText] = useState('');

    const addItemEventHandler = event => {
        event.preventDefault();

        const addItem = {
            id: parseInt(Math.random() * 1000).toString(),
            ele: enteredItem
        }

        setInputText('');
        props.onAddItems(addItem);

        console.log(addItem);
    }

    const itemEnteredHandler = ev => {

        setInputText(ev.target.value);
    };

    function printShopList() {
        window.print();
    }

    function clearList() {
        window.location.reload();
    }

    return (
        <div>
            <form className='add-item' onSubmit={addItemEventHandler}>
                <input type='text' value={enteredItem} onChange={itemEnteredHandler} />
                <button type='submit' className='btn'>Add Item</button>
                <button type='submit' className='btn' onClick={printShopList}>Print Shopping List</button>
                <button type='submit' className='btn' onClick={clearList}>Clean Shopping List</button>
            </form>
        </div>
    );
}

export default AddItems;