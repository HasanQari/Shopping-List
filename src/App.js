import React, {useState} from 'react';

import './App.css';
import ShppingList from './components/ShppingList';
import AddItem from './components/AddItem';

const App = () => {

  const [ShopList, setShopList] = useState([]);

  const ShopListHandler = (SList) => {
    setShopList((preList) => {return preList.concat(SList);});
  }

  return (
    <div>
      <h1 className='headerTitle'>Shopping List</h1>
      <AddItem items={ShopList} onAddItems={ShopListHandler}/>
      <ShppingList items={ShopList}/>
    </div>
  );
};

export default App;
