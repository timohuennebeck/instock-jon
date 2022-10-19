import WarehouseForm from '../WarehouseForm/WarehouseForm'
import './WarehouseList.scss'

export default function WarehouseList(){

    // props: warehousedata
    
    return (
        <div className='warehouse'>
            <h1 className='warehouse__title'>Warehouses</h1>
            <WarehouseForm />
            {/* list */}
        </div>
    )
}