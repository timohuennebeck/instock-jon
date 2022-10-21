import './WarehouseDetailsHeader.scss'

export default function WarehouseDetailsHeader (){
    return (
        <div className='warehouse__list-header'>
            <p className='p-small warehouse__list-header-title'>INVENTORY ITEM</p>
            <p className='p-small warehouse__list-header-title'>CATEGORY</p>
            <p className='p-small warehouse__list-header-title'>STATUS</p>
            <p className='p-small warehouse__list-header-title'>QTY</p>
            <p className='p-small warehouse__list-header-title'>ACTIONS</p>
        </div>
    )
}