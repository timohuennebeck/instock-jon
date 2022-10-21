// import { useState } from 'react';
import ErrorSign from '../../assets/images/icons/error-24px.svg';
import './EditInventoryForm.scss';
import { useState } from "react";
import axios from 'axios';

export default function EditInventoryForm() {
    // const [errors, setErrors] = useState([]);

    const [editInv, setEditInv] = useState({
        id: '',
        name: '',
        description: '',
        category: '',
        status: '',
        warehouse: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;

        const editItemObj = {
            name: form.name.value,
            description: form.description.value,
            category: form.category.value,
            status: form.status.value,
            warehouse: form.warehouse.value
        }

        console.log(editInv);
        console.log(editItemObj);

        axios
            .post('http://localhost:8080/inventories', editItemObj)
            .then((resp) => {
                setEditInv(editInv(resp.data));
            })
            .catch((error) => {
                alert(error.resp.data);
        })

    }

    return (
        <>
            <form className='editform' onSubmit={handleSubmit}>
                <div className='editform__container'>
                    <div className='editform__details'>
                        <h2 className='editform__title'>Item Details</h2>
                        <label className='editform__label' htmlFor='name'>Item Name</label>
                        <input
                            className='editform__input'
                            type='text'
                            name='name'
                            value={editInv.name.value}
                        />
                        {editInv.name.value === '' && (
                            <div className='editform__error'>
                                <img
                                    className='editform__error-sign'
                                    src={ErrorSign}
                                    alt='Red Error Sign for Incomplete Form'
                                />
                                <p className='editform__error-text'>This field is required</p>
                            </div>
                        )}
                        <label className='editform__label' htmlFor='description'>Description</label>
                        <textarea
                            className='editform__input-description'
                            type='text'
                            name='description'
                        // errors={errors}
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
                        <select className='editform__dropdown'
                            type='text'
                            name='category'
                        // placeholder='Please Select'
                        // value={useState.value(category)} 
                        >
                            <option type="text" value=''>Please Select</option>
                            <option type='text' value='Electronics'>Electronics</option>
                            <option type='text' value='Gear'>Gear</option>
                            <option type='text' value='Apparel'>Apparel</option>
                            <option type='text' value='Accessories'>Accessories</option>
                            <option type='text' value='Health'>Health</option>
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
                    <div className='editform__line'></div>
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
                            <option type="text" value=''>Please Select</option>
                            <option type='text' value='Manhattan'>Manhattan</option>
                            <option type='text' value='Washington'>Washington</option>
                            <option type='text' value='Jersey'>Jersey</option>
                            <option type='text' value='San Fran'>San Fran</option>
                            <option type='text' value='Santa Monica'>Santa Monica</option>
                            <option type='text' value='Seattle'>Seattle</option>
                            <option type='text' value='Miami'>Miami</option>
                            <option type='text' value='Boston'>Boston</option>
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