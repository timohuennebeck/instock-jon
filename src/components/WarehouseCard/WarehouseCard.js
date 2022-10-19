import './WarehouseCard.scss'
import deleteIcon from '../../assets/images/icons/delete_outline-24px.svg'
import editIcon from '../../assets/images/icons/edit-24px.svg'

export default function WarehouseCard() {
    return (
        <div className='warehouse-card'>
            <div className='warehouse-card__container '>
                <div className='warehouse-card__tile'>
                    <p className='p-small warehouse-card__title'>WAREHOUSE</p>
                    <p className='p-medium warehouse-card__content warehouse-card__name'>Manhattan</p>
                </div>
                <div className='warehouse-card__tile'>
                    <p className='p-small warehouse-card__title'>ADDRESS</p>
                    <p className='p-medium warehouse-card__content '>503 Broadway, New York, USA</p>
                </div>
            </div>

            <div className='warehouse-card__container'>
                <div className='warehouse-card__tile'>
                    <p className='p-small warehouse-card__title'>CONTACT NAME</p>
                    <p className='p-medium  warehouse-card__content warehouse-card__content--contact'>Parmin Aujla</p>
                </div>
                <div className='warehouse-card__tile warehouse-card__tile--contact-info'>
                    <p className='p-small warehouse-card__title'>CONTACT INFORMATION</p>
                    <p className='p-medium  warehouse-card__content  warehouse-card__content--contact-info'>+1(629)555-0129</p>
                    <p className='p-medium  warehouse-card__content  warehouse-card__content--contact-info'>paujla@instock.com</p>
                </div>
            </div>
            <div className='warehouse-card__icons-container'>
                <img className='warehouse-card__icons'src={deleteIcon} alt='Delete Warehouse'></img>
                <img className='warehouse-card__icons'src={editIcon} alt='Edit Warehouse'></img>
            </div>
        </div>
    )
}