import './WarehouseForm.scss'

export default function WarehouseForm (){
    return(
        <div className='warehouse__form-container'>
            <form className='warehouse__form'>
                <textarea name='search' className='warehouse__form-search' placeholder='Search...' ></textarea>
                <button className='warehouse__form-button'>+Add New Warehouse</button>
            
            
            
            </form>
        </div>
    )
}