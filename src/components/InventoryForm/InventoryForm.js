import './InventoryForm.scss'

export default function InventoryForm (){
    return(
        <div className='inventory__form-container'>
            <form className='inventory__form'>
                <textarea name='search' className='inventory__form-search' placeholder='Search...' ></textarea>
                <button className='inventory__form-button'>+Add New inventory</button>
            </form>
        </div>
    )
}