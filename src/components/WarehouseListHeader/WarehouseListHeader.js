import './WarehouseListHeader.scss'

export default function WarehouseListHeader (){
    return (
        <div className='warehouse__list-header'>
            <p className='p-small warehouse__list-header-title'>WAREHOUSE</p>
            <p className='p-small warehouse__list-header-title  warehouse__list-header-title--address'>ADDRESS</p>
            <p className='p-small warehouse__list-header-title warehouse__list-header-title--contact'>CONTACT NAME</p>
            <p className='p-small warehouse__list-header-title warehouse__list-header-title--info'>CONTACT INFORMATION</p>
            <p className='p-small warehouse__list-header-title warehouse__list-header-title--actions'>ACTIONS</p>
        </div>
    )
}