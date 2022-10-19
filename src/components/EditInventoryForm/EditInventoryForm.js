// import { useState } from 'react';
// import ErrorSign from '../../assets/images/icons/error-24px.svg';
import './EditInventoryForm.scss';

export default function EditInventoryForm() {
    return (
        <>
            <form className='editform'>
                <div className='editform__container'>
                    <div className='editform__details'>
                        <h2 className='editform__title'>Item Details</h2>
                        <label className='editform__label' htmlFor='name'>Item Name</label>
                        <input
                            className='editform__input'
                            type='text'
                            name='name'
                        // value={usestate.value(item-name)}
                        />
                        {/* {usestate.value(item-name) === '' && (
                            <div className='editform__error'>
                                <img
                                    className='editform__error-sign'
                                    src={ErrorSign}
                                    alt='Red Error Sign for Incomplete Form'
                                />
                                <p className='editform__error-text'>This field is required</p>
                            </div>
                        )}; */}
                        <label className='editform__label' htmlFor='description'>Description</label>
                        <textarea
                            className='editform__input-description'
                            type='text'
                            name='description'
                        // value={usestate.value(description)}
                        />
                        {/* {usestate.value(description) === '' && (
                            <div className='editform__error'>
                                <img
                                    className='editform__error-sign'
                                    src={ErrorSign}
                                    alt='Red Error Sign for Incomplete Form'
                                />
                                <p className='editform__error-text'>This field is required</p>
                            </div>
                        )}; */}
                        <label className='editform__label' htmlFor='category'>Category</label>
                        <select className='editform__dropdown' type='text' name='category'
                        // value={useState.value(category)} 
                        >
                            <option type='text'>Electronics</option>
                            <option type='text'>Gear</option>
                            <option type='text'>Apparel</option>
                            <option type='text'>Accessories</option>
                            <option type='text'>Health</option>
                        </select>
                        {/* {usestate.value(category) === '' && (
                            <div className='editform__error'>
                                <img
                                    className='editform__error-sign'
                                    src={ErrorSign}
                                    alt='Red Error Sign for Incomplete Form'
                                />
                                <p className='editform__error-text'>This field is required</p>
                            </div>
                        )}; */}
                    </div>
                    <div className='editform__available'>
                        <h2 className='editform__title'>Item Availability</h2>
                        <label className='editform__label'>Status</label>
                        <div className='editform__status'>
                            <div className='editform__status-container'>
                                <input className='editform__status-radio' type='radio' name='status'
                                // value={useState.value(status)}
                                />
                                <p className='editform__status-text'>In stock</p>
                            </div>
                            <div className='editform__status-container'>
                                <input className='editform__status-radio' type='radio' name='status'
                                // value={useState.value(status)}
                                />
                                <p className='editform__status-text'>Out of stock</p>
                            </div>
                        </div>
                        {/* {usestate.value(status) === '' && (
                            <div className='editform__error'>
                                <img
                                    className='editform__error-sign'
                                    src={ErrorSign}
                                    alt='Red Error Sign for Incomplete Form'
                                />
                                <p className='editform__error-text'>This field is required</p>
                            </div>
                        )}; */}
                        <label className='editform__label'>Warehouse</label>
                        <select className='editform__dropdown' type='text' name='warehouse'
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
                            <div className='editform__error'>
                                <img
                                    className='editform__error-sign'
                                    src={ErrorSign}
                                    alt='Red Error Sign for Incomplete Form'
                                />
                                <p className='editform__error-text'>This field is required</p>
                            </div>
                        )}; */}
                    </div>
                </div>
                <div className='editform__button'>
                    <div className='editform__button-container'>
                        <button className='editform__button-cancel'>Cancel</button>
                        <button className='editform__button-save'>Save</button>
                    </div>
                </div>
            </form>
        </>
    )
}