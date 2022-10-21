import './WarehouseDetailsHeader.scss'

export default function WarehouseDetailsHeader (){
    return (
        <div className='warehouseD__list-header'>
            <p className='p-small warehouseD__list-header-title warehouseD__list-header-title--inventory'>INVENTORY ITEM</p>
            <p className='p-small warehouseD__list-header-title'>CATEGORY</p>
            <p className='p-small warehouseD__list-header-title'>STATUS</p>
            <p className='p-small warehouseD__list-header-title'>QTY</p>
            <p className='p-small warehouseD__list-header-title'>ACTIONS</p>
        </div>
    )
}