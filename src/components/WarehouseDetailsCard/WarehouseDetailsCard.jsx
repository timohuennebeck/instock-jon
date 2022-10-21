import './WarehouseDetailsCard.scss'
import deleteIcon from '../../assets/images/icons/delete_outline-24px.svg'
import editIcon from '../../assets/images/icons/edit-24px.svg'
import InStock from '../InStockBtn/InStockBtn'
import OutStock from '../OutOfStockBtn/OutOfStockBtn'
import chevron from '../../assets/images/icons/chevron_right-24px.svg'
import { useState } from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
import DeleteInventory from '../DeleteInventory/DeleteInventory'

export default function WarehouseDetailsCard({ inv }) {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    
    Modal.setAppElement('.App');

            return(
            <div className='warehouseD-card' key={inv.id}>
            <div className='warehouseD-card__details-container'>
                
                <div className='warehouseD-card__tile warehouseD-card__tile--inventory'>
                    <p className='p-small warehouseD-card__title'>INVENTORY</p>
                    <Link className='warehouseD-card__link' to={`/inventory/${inv.id}`}>
                    <p className='p-medium warehouseD-card__content warehouseD-card__name'>{inv.itemName}</p>
                    <img src={chevron} className='warehouseD-card__chevron'/>
                    </Link>
                </div>

                <div className='warehouseD-card__tile'>
                    <p className='p-small warehouseD-card__title'>CATEGORY</p>
                    <p className='p-medium warehouseD-card__content '>{inv.category}</p>
                </div>

            </div>

            <div className='warehouseD-card__details-container'>

                <div className='warehouseD-card__tile'>
                    <p className='p-small warehouseD-card__title'>STATUS</p>
                    <p className='p-medium  warehouseD-card__content '>
                    { inv.status === "In Stock" ? <InStock /> : <OutStock /> }
                    </p>
                </div>

                <div className='warehouseD-card__tile warehouseD-card__tile--contact'>
                    <p className='p-small warehouseD-card__title'>QTY</p>
                    <p className='p-medium  warehouseD-card__content'>{inv.quantity}</p>
                </div>

            </div>

            <div className='warehouseD-card__icons-container-details'>
                {/* <Link to={`/inventory/${inv.id}/delete`}> */}
                    <button onClick={openModal} className='warehouseD-card__delete-container'>
                        <img className='warehouseD-card__icons'src={deleteIcon} alt='Delete Inventory Item'></img>
                    </button>
  
                {/* </Link> */}
                <Link to={`/inventory/${inv.id}/edit`}>
                <img className='warehouseD-card__icons'src={editIcon} alt='Edit Inventory Item'></img>
                </Link>
                
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="warehouseD-card__modal"
                overlayClassName= "warehouseD-card__modal-overlay"
                >
                
                <DeleteInventory selectedInventoryName={inv.itemName} closeModal={closeModal}/>
            </Modal>
        </div>
            )
  
}