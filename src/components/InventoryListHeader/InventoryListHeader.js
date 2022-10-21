import './InventoryListHeader.scss'

export default function InventoryListHeader (){
    return (
        <div className='inventory__list-header'>
        <p className='p-small inventory__list-header-title'>INVENTORY ITEM</p>
        <p className='p-small inventory__list-header-title'>CATEGORY</p>
        <p className='p-small inventory__list-header-title'>STATUS</p>
        <p className='p-small inventory__list-header-title'>QTY</p>
        <p className='p-small inventory__list-header-title'>WAREHOUSE</p>
        <p className='p-small inventory__list-header-title'>ACTIONS</p>
    </div>
    )
}