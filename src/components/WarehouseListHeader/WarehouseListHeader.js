import './WarehouseListHeader.scss'

export default function WarehouseListHeader (){
    return (
        <div className='warehouse__list-header'>
            <p className='p-small warehouse__list-header-title'>WAREHOUSE</p>
            <p className='p-small warehouse__list-header-title'>ADDRESS</p>
            <p className='p-small warehouse__list-header-title'>CONTACT NAME</p>
            <p className='p-small warehouse__list-header-title'>CONTACT INFORMATION</p>
            <p className='p-small warehouse__list-header-title'>ACTIONS</p>
        </div>
    )
}