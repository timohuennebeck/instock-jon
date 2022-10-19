// import ErrorSign from '../../assets/images/icons/error-24px.svg';
import './AddInventoryForm.scss';

export default function AddInventoryForm() {
    // const [errors, setErrors] = useState([]);
    return (
        <>
            <form className='addform'>
                <div className='addform__container'>
                    <div className='addform__details'>
                        <h2 className='addform__title'>Item Details</h2>
                        <label className='addform__label' htmlFor='name'>Item Name</label>
                        <input
                            className='addform__input'
                            type='text'
                            name='name'
                        // value={usestate.value(item-name)}
                        />
                        {/* {usestate.value(item-name) === '' && ( */}
                            {/* <div className='addform__error'>
                                <img
                                    className='addform__error-sign'
                                    src={ErrorSign}
                                    alt='Red Error Sign for Incomplete Form'
                                />
                                <p className='addform__error-text'>This field is required</p>
                            </div> */}
                        {/* )}; */}
                        <label className='addform__label' htmlFor='description'>Description</label>
                        <textarea
                            className='addform__input-description'
                            type='text'
                            name='description'
                            // errors={errors}
                            // value={usestate.value(description)}
                        />
                        {/* {usestate.value(description) === '' && (
                            <div className='addform__error'>
                                <img
                                    className='addform__error-sign'
                                    src={ErrorSign}
                                    alt='Red Error Sign for Incomplete Form'
                                />
                                <p className='addform__error-text'>This field is required</p>
                            </div>
                        )}; */}
                        <label className='addform__label' htmlFor='category'>Category</label>
                        <select className='addform__dropdown'
                            type='text'
                            name='category'
                            // placeholder='Please Select'
                        // value={useState.value(category)} 
                        >
                            <option type='text' value='Electronics'>Electronics</option>
                            <option type='text' value='Gear'>Gear</option>
                            <option type='text' value='Apparel'>Apparel</option>
                            <option type='text' value='Accessories'>Accessories</option>
                            <option type='text' value='Health'>Health</option>
                        </select>
                        {/* {usestate.value(category) === '' && (
                            <div className='addform__error'>
                                <img
                                    className='addform__error-sign'
                                    src={ErrorSign}
                                    alt='Red Error Sign for Incomplete Form'
                                />
                                <p className='addform__error-text'>This field is required</p>
                            </div>
                        )}; */}
                    </div>
                    <div className='addform__line'></div>
                    <div className='addform__available'>
                        <h2 className='addform__title'>Item Availability</h2>
                        <label className='addform__label'>Status</label>
                        <div className='addform__status'>
                            <div className='addform__status-container'>
                                <input className='addform__status-radio' type='radio' name='status'
                                // value={useState.value(status)}
                                />
                                <p className='addform__status-text'>In stock</p>
                            </div>
                            <div className='addform__status-container'>
                                <input className='addform__status-radio' type='radio' name='status'
                                // value={useState.value(status)}
                                />
                                <p className='addform__status-text'>Out of stock</p>
                            </div>
                        </div>
                        {/* {usestate.value(status) === '' && (
                            <div className='addform__error'>
                                <img
                                    className='addform__error-sign'
                                    src={ErrorSign}
                                    alt='Red Error Sign for Incomplete Form'
                                />
                                <p className='addform__error-text'>This field is required</p>
                            </div>
                        )}; */}
                        <label className='addform__label' htmlFor='name'>Quantity</label>
                        <input
                            className='addform__input'
                            type='number'
                            name='quantity'
                            placeholder='0'
                        // value={usestate.value(item-name)}
                        />
                        <label className='addform__label'>Warehouse</label>
                        <select className='addform__dropdown' type='text' name='warehouse'
                        // value={useState.value(warehouse)} 
                        >
                            <option type='text'>Please Select</option>
                            <option type='text'>Manhattan</option>
                            <option type='text'>Washington</option>
                            <option type='text'>Jersey</option>
                            <option type='text'>San Fran</option>
                            <option type='text'>Santa Monica</option>
                            <option type='text'>Seattle</option>
                            <option type='text'>Miami</option>
                            <option type='text'>Boston</option>
                        </select>
                        {/* {usestate.value(warehouse) === '' && (
                            <div className='addform__error'>
                                <img
                                    className='addform__error-sign'
                                    src={ErrorSign}
                                    alt='Red Error Sign for Incomplete Form'
                                />
                                <p className='addform__error-text'>This field is required</p>
                            </div>
                        )}; */}
                    </div>
                </div>
                <div className='addform__button'>
                    <div className='addform__button-container'>
                        <button className='addform__button-cancel'>Cancel</button>
                        <button className='addform__button-save'>+Add Item</button>
                    </div>
                </div>
            </form>
        </>
    )
}