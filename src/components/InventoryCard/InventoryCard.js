import deleteIcon from "../../assets/images/icons/delete_outline-24px.svg";
import editIcon from "../../assets/images/icons/edit-24px.svg";
import InStock from "../InStockBtn/InStockBtn";
import OutStock from "../OutOfStockBtn/OutOfStockBtn";
import chevron from "../../assets/images/icons/chevron_right-24px.svg";
import "./InventoryCard.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "react-modal";
import DeleteInventory from "../DeleteInventory/DeleteInventory";

export default function InventoryCard({ inv }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  Modal.setAppElement(".App");

  if (!inv) {
    return <p>Loading...</p>;
  }
  return (
    <div className="inventory-card" key={inv.id}>
      <div className="inventory-card__details-container">
        <div className="inventory-card__tile">
          <p className="p-small inventory-card__title">INVENTORY</p>
          <Link className="inventory-card__link" to={`/inventory/${inv.id}`}>
            <p className="p-medium inventory-card__content inventory-card__name">
              {inv.itemName}
            </p>
            <img src={chevron} className="inventory-card__chevron" />
          </Link>
        </div>

        <div className="inventory-card__tile">
          <p className="p-small inventory-card__title">CATEGORY</p>
          <p className="p-medium inventory-card__content ">{inv.category}</p>
        </div>
      </div>

      <div className="inventory-card__details-container">
        <div className="inventory-card__tile">
          <p className="p-small inventory-card__title">STATUS</p>
          <p className="p-medium  inventory-card__content ">
            {inv.status === "In Stock" ? <InStock /> : <OutStock />}
          </p>
        </div>

        <div className="inventory-card__tile inventory-card__tile--contact">
          <p className="p-small inventory-card__title">QTY</p>
          <p className="p-medium  inventory-card__content">{inv.quantity}</p>
        </div>
      </div>
      <div className="inventory-card__details-container">
        <div className="inventory-card__tile inventory-card__warehouse">
          <p className="p-small inventory-card__title">WAREHOUSE</p>
          <Link
            to={`/warehouses/${inv.warehouseID}`}
            className="inventory-card__link"
          >
            <p className="p-medium  inventory-card__content inventory-card__warehouse-name">
              {inv.warehouseName}
            </p>
          </Link>
        </div>
      </div>
      <div className="inventory-card__icons-container">
        <button
          className="inventory-card__delete-container"
          onClick={openModal}
        >
          <img
            className="inventory-card__icons"
            src={deleteIcon}
            alt="Delete Inventory Item"
          ></img>
        </button>

        <Link to={`/inventory/${inv.id}/edit`}>
          <img
            className="inventory-card__icons"
            src={editIcon}
            alt="Edit Inventory Item"
          ></img>
        </Link>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="inventory-card__modal"
        overlayClassName="inventory-card__modal-overlay"
      >
        <DeleteInventory
          selectedInventoryName={inv.itemName}
          closeModal={closeModal}
        />
      </Modal>
    </div>
  );
}
