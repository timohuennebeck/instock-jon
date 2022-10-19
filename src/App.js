import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import PageHeader from './components/PageHeader/PageHeader';
// import WarehouseList from './pages/WarehouseList/WarehouseList';
// import WarehouseDetail from './pages/WarehouseDetail/WarehouseDetail';
// import InventoryList from './pages/InventoryList/InventoryList';
// import InventoryDetail from './pages/InventoryDetail/InventoryDetail';
import EditInventory from './pages/EditInventory/EditInventory';

function App() {
  return (
    <div>
      <Router>
        {/* <PageHeader /> */}
        <Routes>
          {/* <Route path='/' element={<WarehouseList />} /> */}
          {/* <Route path='/warehouses' element={<WarehouseList />} /> */}
          {/* <Route path='/inventory' element={<InventoryList />} /> */}
          {/* <Route path='/warehouses/:id' element={<WarehouseDetail />} /> */}
          {/* <Route part='inventory/:id' element={<InventoryDetail />} /> */}
          <Route path='/inventory/edit' element={<EditInventory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;