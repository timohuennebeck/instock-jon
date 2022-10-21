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
                <Link to={`/inventory/${inv.id}/delete`}>
                <img className='warehouseD-card__icons'src={deleteIcon} alt='Delete Inventory Item'></img>
                </Link>
                <Link to={`/inventory/${inv.id}/edit`}>
                <img className='warehouseD-card__icons'src={editIcon} alt='Edit Inventory Item'></img>
                </Link>
                
            </div>

        </div>
            )
          })}  
</>
    )
}