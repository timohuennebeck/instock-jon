import InventoryForm from '../../components/InventoryForm/InventoryForm'
import InventoryListHeader from '../../components/InventoryListHeader/InventoryListHeader'
import './InventoryList.scss'

export default function InventoryList() {

  
    return (
      <>
      <div className="inventory">
        <div className="inventory__header">
          <h1 className="inventory__header__title">Inventory</h1>
          <InventoryForm />
        </div>
        <InventoryListHeader />
        {/* <InventoryCard /> */}

      </div>
      </>
    );
  }