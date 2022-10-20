import WarehouseDetailsCard from "../WarehouseDetailsCard/WarehouseDetailsCard";
import WarehouseDetailsHeader from "../WarehouseDetailsHeader/WarehouseDetailsHeader";
import backArrow from "../../assets/images/icons/arrow_back-24px.svg";
import editBtn from "../../assets/images/icons/edit-24px.svg";
import { Link } from "react-router-dom";
import './WarehouseDetails.scss'

export default function WarehouseDetails() {
  return (
    <>
      <div className="warehouse">
        <div className="warehouse__header-container">
          <div className="warehouse__details-header">
            <img src={backArrow} />
            <h1 className="warehouse__header__title">Washington</h1>
          </div>
          <div className="warehouse__edit-container">
            <Link>
              <button className="warehouse__edit-btn">
                <img className="warehouse__edit" src={editBtn} />
              </button>
            </Link>
          </div>
        </div>
        <WarehouseDetailsHeader />
        {/* list */}
        <WarehouseDetailsCard />
        <WarehouseDetailsCard />
        {/* {warehouseData.map((warehouse) => (
            <WarehouseDetailsCard
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
