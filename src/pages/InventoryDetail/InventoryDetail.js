import "./InventoryDetail.scss";
import editIcon from "../../assets/images/icons/edit-24px.svg";
import backIcon from "../../assets/images/icons/arrow_back-24px.svg";
import InStock from "../../components/InStockBtn/InStockBtn";
import OutStock from "../../components/OutOfStockBtn/OutOfStockBtn";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function InventoryItemDetails({ inventoryData }) {
  const [inventoryItem, setInventoryItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/inventory/${id}`)
      .then((resp) => {
        setInventoryItem(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!inventoryItem) {
    return <p> Loading... </p>;
  }

  return (
    <div className="inventory-details">
      <div className="inventory-details__header">
        <div className="inventory-details__title-container">
          <Link to="/inventory" className="inventory-details__back-icon">
            <img src={backIcon} alt="Go Back" />
          </Link>

          <h1 className="inventory-details__item">{inventoryItem.itemName}</h1>
        </div>
        <Link to={`/inventory/${id}/edit`}>
          <div className="inventory-details__edit-container">
            <img
              className="inventory-details__edit-icon"
              src={editIcon}
              alt="Edit Details"
            />
              <p className="inventory-details__edit-text">Edit</p>
          </div>
        </Link>
      </div>
      <div className="inventory-details__card">
        <div className="inventory-details__container inventory-details__container--left">
          <p className="p-small inventory-details__title">ITEM DESCRIPTION:</p>
          <p className="p-small inventory-details__details">
            {inventoryItem.description}
          </p>
          <p className="p-small inventory-details__title">CATEGORY:</p>
          <p className="p-small inventory-details__details inventory-details__details-category">
            {inventoryItem.category}
          </p>
        </div>
        <div className="inventory-details__container  inventory-details__container--right">
          <div className="inventory-details__tile">
            <div>
              <p className="p-small inventory-details__title">STATUS:</p>
              <p className="p-small ">
                {inventoryItem.status === "In Stock" ? (
                  <InStock />
                ) : (
                  <OutStock />
                )}
              </p>
            </div>
            <div>
              <p className="p-small inventory-details__title">QUANTITY:</p>
              <p className="p-small inventory-details__details">
                {inventoryItem.quantity}
              </p>
            </div>
          </div>
          <p className="p-small inventory-details__title">WAREHOUSE:</p>
          <p className="p-small inventory-details__details">
            {inventoryItem.warehouseName}
          </p>
        </div>
      </div>
    </div>
  );
}
