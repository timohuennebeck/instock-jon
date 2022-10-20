import WarehouseDetailsCard from "../WarehouseDetailsCard/WarehouseDetailsCard";
import WarehouseDetailsHeader from "../WarehouseDetailsHeader/WarehouseDetailsHeader";
import backArrow from "../../assets/images/icons/arrow_back-24px.svg";
import editBtn from "../../assets/images/icons/edit-24px.svg";
import { Link } from "react-router-dom";
import './WarehouseDetails.scss'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function WarehouseDetails() {
    const warehouseId = useParams();
    const [warehouseData, setWarehouseData] = useState(null);
    const [inventoryData, setInventoryData] = useState(null);

    useEffect(()=>{
        axios
        .get(`http://localhost:8080/warehouses/${warehouseId.id}`).then((res)=>{
            const warehouseDetails = res.data.warehouseDetails;
            const inventoryDetails = res.data.inventoryData;
            setWarehouseData(warehouseDetails)   
            setInventoryData(inventoryDetails)           
        })
    }, []);
    if( !warehouseData) { 
      return <p> Loading... </p> }
   
     if( !inventoryData) { 
       return <p> Loading... </p> }
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
        <WarehouseDetailsCard inventoryData={inventoryData}/>

        {/* list */}
        {/* {inventoryData.map((inv) => (
            <WarehouseDetailsCard
              key={inv.id}
              name={inv.itemName}
              quantity={inv.quantity}
              stockStatus={inv.status}

            />
          ))} */}
      </div>
    </>
  );
}
