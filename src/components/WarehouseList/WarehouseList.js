import WarehouseCard from "../WarehouseCard/WarehouseCard";
import WarehouseForm from "../WarehouseForm/WarehouseForm";
import WarehouseListHeader from "../WarehouseListHeader/WarehouseListHeader";
import "./WarehouseList.scss";
import { Link } from "react-router-dom";
import DeleteNotification  from '../DeleteNotification/DeleteNotification';
import { useState } from 'react';
import { useParams} from "react-router-dom";

export default function WarehouseList({warehouseData, handleDelete, selectedWarehouseName, id}) {



  return (
    <>
    <div className="warehouse">
      <div className="warehouse__header">
        <h1 className="warehouse__header__title">Warehouses</h1>
        <WarehouseForm />
      </div>
      <WarehouseListHeader />
      {warehouseData.map((warehouse) => (
          <WarehouseCard key={warehouse.id} warehouse={warehouse} handleDelete={handleDelete} />
      ))}
      <dialog className='delete-warehouse'><DeleteNotification selectedWarehouseName={selectedWarehouseName} id={id}/></dialog>
    </div>
    
    </>
  );
}
