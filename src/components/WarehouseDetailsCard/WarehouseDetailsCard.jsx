import './WarehouseDetailsCard.scss'
import deleteIcon from '../../assets/images/icons/delete_outline-24px.svg'
import editIcon from '../../assets/images/icons/edit-24px.svg'
import InStock from '../InStockBtn/InStockBtn'
import OutStock from '../OutOfStockBtn/OutOfStockBtn'
import chevron from '../../assets/images/icons/chevron_right-24px.svg'
import { Link } from 'react-router-dom'

export default function WarehouseDetailsCard({ inventoryData }) {
    console.log(inventoryData)
    return (
        <>
        {inventoryData?.map((inv)=>{
            return(
            <div className='warehouse-card' key={inv.id}>
            <div className='warehouse-card__details-container'>
                
                <div className='warehouse-card__tile'>
                    <p className='p-small warehouse-card__title'>INVENTORY</p>
                    <Link className='warehouse-card__link' to={`/inventory/${inv.id}`}>
                    <p className='p-medium warehouse-card__content warehouse-card__name'>{inv.itemName}</p>
                    <img src={chevron} className='warehouse-card__chevron'/>
                    </Link>
                </div>

                <div className='warehouse-card__tile'>
                    <p className='p-small warehouse-card__title'>CATEGORY</p>
                    <p className='p-medium warehouse-card__content '>{inv.category}</p>
                </div>

            </div>

            <div className='warehouse-card__details-container'>

                <div className='warehouse-card__tile'>
                    <p className='p-small warehouse-card__title'>STATUS</p>
                    <p className='p-medium  warehouse-card__content '>
                    { inv.status === "In Stock" ? <InStock /> : <OutStock /> }
                    </p>
                </div>

                <div className='warehouse-card__tile warehouse-card__tile--contact'>
                    <p className='p-small warehouse-card__title'>QTY</p>
                    <p className='p-medium  warehouse-card__content'>{inv.quantity}</p>
                </div>

            </div>

            <div className='warehouse-card__icons-container'>
                <Link to={`/inventory/${inv.id}/delete`}>
                <img className='warehouse-card__icons'src={deleteIcon} alt='Delete Inventory Item'></img>
                </Link>
                <Link to={`/inventory/${inv.id}/delete`}>
                <img className='warehouse-card__icons'src={editIcon} alt='Edit Inventory Item'></img>
                </Link>
                
            </div>

        </div>
            )
          })}  
</>
    )
}