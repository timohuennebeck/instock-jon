import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WarehousesDetailsEdit from './pages/WarehousesDetailsEdit/WarehousesDetailsEdit';
import WarehousesDetailsAdd from './pages/WarehouseDetailsAdd/WarehousesDetailsAdd';
import DeleteNotification from './components/DeleteNotification/DeleteNotification';
import PageHeader from './components/PageHeader/PageHeader';
import PageFooter from './components/PageFooter/PageFooter';
import Warehouse from './pages/Warehouse/Warehouse';
import WarehouseDetails from './components/WarehouseDetails/WarehouseDetails';
import InventoryList from './pages/InventoryList/InventoryList';
import InventoryDetail from './pages/InventoryDetail/InventoryDetail';
import EditInventory from './pages/EditInventory/EditInventory';
import DeleteInventory from './components/DeleteInventory/DeleteInventory';
import AddInventory from './pages/AddInventory/AddInventory';


function App() {
  return (
    <div>
      <Router>
        {/* <DeleteNotification /> */}
        <PageHeader />
        <div className='main__page'>
        <Routes>
          <Route path='/' element={<Warehouse />} />
          <Route path='/warehouses' element={<Warehouse />} />
          <Route path='/inventory' element={<InventoryList />} />
          <Route path='/warehouses/:id' element={<WarehouseDetails />} />
          <Route path="/warehouses/:id/delete" element={<Warehouse />}/>
          <Route path="/warehouses/:id/edit" element={<WarehousesDetailsEdit />}/>
          <Route path="/warehouses/add" element={<WarehousesDetailsAdd />}/>
          <Route path='/inventory/:id' element={<InventoryDetail />} />
          <Route path='/inventory/add' element={<AddInventory />} />
          <Route path='/inventory/:id/edit' element={<EditInventory />} />
        </Routes>
        </div>
        <PageFooter />
      </Router>
    </div>
  );
}

export default App;