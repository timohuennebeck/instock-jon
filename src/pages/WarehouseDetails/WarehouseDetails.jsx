import WarehouseDetailsCard from "../../components/WarehouseDetailsCard/WarehouseDetailsCard";
import WarehouseDetailsHeader from "../../components/WarehouseDetailsHeader/WarehouseDetailsHeader";
import backArrow from "../../assets/images/icons/arrow_back-24px.svg";
import editBtn from "../../assets/images/icons/edit-24px.svg";
import { Link } from "react-router-dom";
import "./WarehouseDetails.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function WarehouseDetails() {
  const warehouseId = useParams();
  const [warehouseData, setWarehouseData] = useState(null);
  const [inventoryData, setInventoryData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/warehouses/${warehouseId.id}`)
      .then((res) => {
        const warehouseDetails = res.data.warehouseDetails;
        const inventoryDetails = res.data.inventoryData;
        setWarehouseData(warehouseDetails);
        setInventoryData(inventoryDetails);
      });
  }, []);
  if (!warehouseData) {
    return <p> Loading... </p>;
  }

  if (!inventoryData) {
    return <p> Loading... </p>;
  }
  console.log(warehouseData)
  return (
    <>
    <div className="warehouse">
        {warehouseData?.map((warehouse) => {
          return (
          <>
          <div className="warehouse__header-container"key={warehouse.id}>
            <div className="warehouse__details-header">
              <Link to='/warehouses'>
              <img src={backArrow} className='warehouse__back-arrow'/>
              </Link>
              <h1 className="warehouse__header__title">{warehouse.city}</h1>
            </div>
            <div className="warehouse__edit-container">
              <Link to={`/warehouse/${warehouse.id}/edit`}>
                <button className="warehouse__edit-btn">
                  <img className="warehouse__edit" src={editBtn} />
                  <p className="p-medium warehouse__hidden">Edit</p>
                </button>
              </Link>
            </div>
          </div>
            <div className="warehouse__details-container"> 
              <div className="warehouse__address">
                <p className="p-small">WAREHOUSE ADDRESS:</p>
                <p className="p-medium">
                  {warehouse.address},<br/>
                  {`${warehouse.city}, ${warehouse.country}`}
                </p>
              </div>
              <div className="warehouse__contact-container">
                <div className="warehouse__name">
                  <p className="p-small">CONTACT NAME:</p>
                  <p className="p-medium">
                    {warehouse.contact.name}
                    <br />
                    {warehouse.contact.position}
                  </p>
                </div>
                <div className="warehouse__contact-info">
                  <p className="p-small">CONTACT INFORMATION:</p>
                  <p className="p-medium">
                  {warehouse.contact.phone}
                    <br />
                    {warehouse.contact.email}
                  </p>
                </div>
              </div>
            </div>
            </>
      
       )})}
        <WarehouseDetailsHeader />
        <WarehouseDetailsCard inventoryData={inventoryData} />
        </div>
    </>
  );
}
