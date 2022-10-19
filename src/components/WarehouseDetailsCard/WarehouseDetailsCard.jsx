import './WarehouseDetailsCard.scss'
import deleteIcon from '../../assets/images/icons/delete_outline-24px.svg'
import editIcon from '../../assets/images/icons/edit-24px.svg'

export default function WarehouseDetailsCard() {
    return (
        <div className='warehouse-card'>
            <div className='warehouse-card__container'>
                <div className='warehouse-card__tile'>
                    <p className='p-small warehouse-card__title'>INVENTORY</p>
                    <p className='p-medium warehouse-card__content warehouse-card__name'>Television</p>
                </div>
                <div className='warehouse-card__tile'>
                    <p className='p-small warehouse-card__title'>CATEGORY</p>
                    <p className='p-medium warehouse-card__content '>Electronics</p>
                </div>
            </div>

            <div className='warehouse-card__container'>
                <div className='warehouse-card__tile'>
                    <p className='p-small warehouse-card__title'>STATUS</p>
                    <p className='p-medium  warehouse-card__content '>Insert Status Tag</p>
                </div>
                <div className='warehouse-card__tile warehouse-card__tile--contact'>
                    <p className='p-small warehouse-card__title'>QTY</p>
                    <p className='p-medium  warehouse-card__content'>500</p>
                </div>
            </div>
            <div className='warehouse-card__icons-container'>
                <img className='warehouse-card__icons'src={deleteIcon} alt='Delete Warehouse'></img>
                <img className='warehouse-card__icons'src={editIcon} alt='Edit Warehouse'></img>
            </div>
        </div>
    )
}