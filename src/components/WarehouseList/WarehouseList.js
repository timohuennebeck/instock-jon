import WarehouseCard from "../WarehouseCard/WarehouseCard";
import WarehouseForm from "../WarehouseForm/WarehouseForm";
import WarehouseListHeader from "../WarehouseListHeader/WarehouseListHeader";
import "./WarehouseList.scss";
import axios from "axios";

export default function WarehouseList() {
  // props: warehousedata


  return (
    <>
    <div className="warehouse">
      <div className="warehouse__header">
        <h1 className="warehouse__header__title">Warehouses</h1>
        <WarehouseForm />
      </div>
      <WarehouseListHeader />
      {/* list */}
      <WarehouseCard />
      <WarehouseCard />
      {/* {warehouseData.map((warehouse) => (
        <WarehouseListCard
          key={warehouseData.id}
          name={warehouseData.name}
          address={warehouseData.address}
          contactName={warehouseData.contact.name}
          phone={warehouseData.contact.phone}
          email={warehouseData.contact.email}
        />
      ))} */}
    </div>
    </>
  );
}
