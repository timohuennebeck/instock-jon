import './InventoryDetail.scss'
import editIcon from '../../assets/images/icons/edit-24px.svg'
import backIcon from '../../assets/images/icons/arrow_back-24px.svg'

export default function InventoryItemDetails(){
    return (
        <div className='inventory-details'>
            <div className='inventory-details__header'>
                <div className='inventory-details__title-container'>
                    <img  className='inventory-details__back-icon' src={backIcon} alt='Go Back'/>
                    <h1 className='inventory-details__item'>Television</h1>
                </div>
                <div className='inventory-details__edit-container'>
                    <img  className='inventory-details__edit-icon' src={editIcon} alt='Edit Details'/>
                    <p  className='inventory-details__edit-text'>Edit</p>
                </div>
            </div>
            <div className='inventory-details__card'>
                <div  className='inventory-details__container inventory-details__container--left'>
                    <p className='p-small inventory-details__title'>ITEM DESCRIPTION:</p>
                    <p className='p-small inventory-details__details'>This 50', 4K LED TV provides a crystal-clear picture and vivid colors.</p>
                    <p className='p-small inventory-details__title'>CATEGORY:</p>
                    <p className='p-small inventory-details__details inventory-details__details-category'>Electronics</p>
                </div>
                <div  className='inventory-details__container  inventory-details__container--right'>
                    <div className='inventory-details__tile'>
                        <div>
                            <p className='p-small inventory-details__title'>STATUS:</p>
                            <p className='p-small inventory-details__status'>In Stock</p>
                        </div>
                        <div>
                            <p className='p-small inventory-details__title'>QUANTITY:</p>
                            <p className='p-small inventory-details__details'>500</p>
                        </div>
                    </div>
                    <p className='p-small inventory-details__title'>WAREHOUSE:</p>
                    <p className='p-small inventory-details__details'>Manhattan</p>
                </div>
            </div>
        </div>
    )
}