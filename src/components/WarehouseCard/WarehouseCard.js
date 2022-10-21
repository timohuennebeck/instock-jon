import './WarehouseCard.scss'
import deleteIcon from '../../assets/images/icons/delete_outline-24px.svg'
import editIcon from '../../assets/images/icons/edit-24px.svg'
import { Link } from "react-router-dom";


export default function WarehouseCard({warehouse, handleDelete}) {
    
    const address = `${warehouse.address}, ${warehouse.city}, ${warehouse.country}`
    
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
                <Link to={`warehouses/${warehouse.id}/delete`}>
                    <img onClick={handleDelete} className='warehouse-card__icons'src={deleteIcon} alt='Delete Warehouse'></img>
                </Link>
                
                <Link to={`warehouses/${warehouse.id}/edit`}>
                    <img className='warehouse-card__icons 'src={editIcon} alt='Edit Warehouse'></img>
                </Link>
                
            </div>
            
        
        </div>
    )
}