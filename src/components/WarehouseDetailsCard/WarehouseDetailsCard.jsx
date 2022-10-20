import './WarehouseDetailsCard.scss'
import deleteIcon from '../../assets/images/icons/delete_outline-24px.svg'
import editIcon from '../../assets/images/icons/edit-24px.svg'
import InStock from '../InStockBtn/InStockBtn'
import OutStock from '../OutOfStockBtn/OutOfStockBtn'

export default function WarehouseDetailsCard({ inventoryData }) {
    console.log(inventoryData)
    return (
        <>
        {inventoryData?.map((inv)=>{
            return(
            <div className='warehouse-card' key={inv.id}>
            <div className='warehouse-card__container'>
                <div className='warehouse-card__tile'>
                    <p className='p-small warehouse-card__title'>INVENTORY</p>
                    <p className='p-medium warehouse-card__content warehouse-card__name'>{inv.itemName}</p>
                </div>
                <div className='warehouse-card__tile'>
                    <p className='p-small warehouse-card__title'>CATEGORY</p>
                    <p className='p-medium warehouse-card__content '>{inv.category}</p>
                </div>
            </div>

            <div className='warehouse-card__container'>
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
                <img className='warehouse-card__icons'src={deleteIcon} alt='Delete Warehouse'></img>
                <img className='warehouse-card__icons'src={editIcon} alt='Edit Warehouse'></img>
            </div>
        </div>
            )
          })}  
</>
    )
}