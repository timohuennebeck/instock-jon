import InventoryForm from '../../components/InventoryForm/InventoryForm'
import InventoryListHeader from '../../components/InventoryListHeader/InventoryListHeader'
import InventoryCard from '../../components/InventoryCard/InventoryCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './InventoryList.scss'

export default function InventoryList() {
  const [inventoryData, setInventoryData] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8080/inventory')
      .then((res) => {
        const inventoryDetails = res.data;
        setInventoryData(inventoryDetails);
      });
  }, []);
 
  if (!inventoryData) {
    return <p> Loading... </p>;
  }
  console.log(inventoryData)
  
    return (
      <>
      <div className="inventory">
        <div className="inventory__header">
          <h1 className="inventory__header__title">Inventory</h1>
          <InventoryForm />
        </div>
        <InventoryListHeader />
        <InventoryCard inventoryData={inventoryData}/>

      </div>
      </>
    );
  }