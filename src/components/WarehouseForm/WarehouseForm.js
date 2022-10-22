import './WarehouseForm.scss'
import { Link } from "react-router-dom";

export default function WarehouseForm (){
    return(
        <div className='warehouse__form-container'>
            <form className='warehouse__form'>
                <textarea name='search' className='warehouse__form-search' placeholder='Search...' ></textarea>
                <Link to='/warehouses/add'>
                    <button className='warehouse__form-button'>+Add New Warehouse</button>
                </Link>
            </form>
        </div>
    )
}