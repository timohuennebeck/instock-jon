import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WarehousesDetailsEdit from './pages/WarehousesDetailsEdit/WarehousesDetailsEdit';
import WarehousesDetailsAdd from './pages/WarehouseDetailsAdd/WarehousesDetailsAdd';
// import DeleteNotification from './components/DeleteNotification/DeleteNotification';
// import PageHeader from './components/PageHeader/PageHeader';
// import WarehouseList from './pages/WarehouseList/WarehouseList';
// import WarehouseDetails from './pages/WarehouseDetails/WarehouseDetails';
// import InventoryList from './pages/InventoryList/InventoryList';
// import InventoryDetail from './pages/InventoryDetail/InventoryDetail';
import EditInventory from './pages/EditInventory/EditInventory';
import AddInventory from './pages/AddInventory/AddInventory';

function App() {
  return (
    <div>
      <Router>
        {/* <DeleteNotification /> */}
        {/* <PageHeader /> */}
        <Routes>
          {/* <Route path='/' element={<WarehouseList />} /> */}
          {/* <Route path='/warehouses' element={<WarehouseList />} /> */}
          {/* <Route path='/inventory' element={<InventoryList />} /> */}
          <Route path='/inventory/edit' element={<EditInventory />} />
          <Route path='/inventory/add' element={<AddInventory />} />
          {/* <Route path='/warehouses/:id' element={<WarehouseDetails />} /> */}
          <Route path="warehouses/:id/edit" element={<WarehousesDetailsEdit />}/>
          <Route path="warehouses/add" element={<WarehousesDetailsAdd />}/>
          {/* <Route part='inventory/:id' element={<InventoryDetail />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;