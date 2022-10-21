import './WarehouseCard.scss'
import deleteIcon from '../../assets/images/icons/delete_outline-24px.svg'
import editIcon from '../../assets/images/icons/edit-24px.svg'
import { Link } from "react-router-dom";
import DeleteNotification  from '../DeleteNotification/DeleteNotification';
import { useState } from 'react';

export default function WarehouseCard({warehouse}) {
    const[deleteClicked, setDeleteClicked] = useState(false)
    const address = `${warehouse.address}, ${warehouse.city}, ${warehouse.country}`

    const handleDelete = ()=> {
        setDeleteClicked(true)
        // document.querySelector('.warehouse-card').style.zindex = '-1'
        document.querySelector('.delete-warehouse').showModal()

    }

    return (
        <div className='warehouse-card'>
            <div className='warehouse-card__container '>
                <div className='warehouse-card__tile'>
                    <p className='p-small warehouse-card__title'>WAREHOUSE</p>
                    <Link to={`/warehouse/${warehouse.id}`}>
                        <p className='p-medium warehouse-card__content warehouse-card__content--name'>{warehouse.name}</p>
                    </Link>
                </div>
                <div className='warehouse-card__tile'>
                    <p className='p-small warehouse-card__title'>ADDRESS</p>
                    <p className='p-medium warehouse-card__content warehouse-card__content--address'>{address}</p>
                </div>
            </div>

            <div className='warehouse-card__container'>
                <div className='warehouse-card__tile'>
                    <p className='p-small warehouse-card__title'>CONTACT NAME</p>
                    <p className='p-medium  warehouse-card__content warehouse-card__content--contact'>{warehouse.contact.name}</p>
                </div>
                <div className='warehouse-card__tile warehouse-card__tile--contact-info'>
                    <p className='p-small warehouse-card__title'>CONTACT INFORMATION</p>
                    <p className='p-medium  warehouse-card__content  warehouse-card__content--contact-info'>{warehouse.contact.phone}</p>
                    <p className='p-medium  warehouse-card__content  warehouse-card__content--contact-info'>{warehouse.contact.email}</p>
                </div>
            </div>
            <div className='warehouse-card__icons-container'>
                <img onClick={handleDelete} className='warehouse-card__icons'src={deleteIcon} alt='Delete Warehouse'></img>
                <img className='warehouse-card__icons'src={editIcon} alt='Edit Warehouse'></img>
            </div>
            {/* {deleteClicked && <DeleteNotification />} */}
            <dialog className='delete-warehouse'><DeleteNotification /></dialog>
        
        </div>
    )
}