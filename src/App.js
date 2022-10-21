import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WarehousesDetailsEdit from './pages/WarehousesDetailsEdit/WarehousesDetailsEdit';
import WarehousesDetailsAdd from './pages/WarehouseDetailsAdd/WarehousesDetailsAdd';
import DeleteNotification from './components/DeleteNotification/DeleteNotification';
import PageHeader from './components/PageHeader/PageHeader';
import Warehouse from './pages/Warehouse/Warehouse';
import WarehouseDetails from './pages/WarehouseDetails/WarehouseDetails';
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
        <Routes>
          <Route path='/' element={<Warehouse />} />
          <Route path='/warehouses' element={<Warehouse />} />
          <Route path='/inventory' element={<InventoryList />} />
          <Route path='/warehouse/:id' element={<WarehouseDetails />} />
          <Route path="warehouse/:id/delete" element={<Warehouse />}/>
          <Route path="/warehouse/:id/edit" element={<WarehousesDetailsEdit />}/>
          <Route path="warehouse/add" element={<WarehousesDetailsAdd />}/>
          <Route part='inventory/:id' element={<InventoryDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;