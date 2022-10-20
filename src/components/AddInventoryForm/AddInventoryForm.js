import ErrorSign from '../../assets/images/icons/error-24px.svg';
import './AddInventoryForm.scss';
import { useState, useRef } from "react";
import axios from 'axios';
import InputField from "../../components/InputField/InputField";
import TextareaField from '../../components/TextareaField/TextareaField';

export default function AddInventoryForm() {
    const formValues = useRef();
    const [addInv, setAddInv] = useState([]);

    const [errors, setErrors] = useState([]);
    
    const handleSubmit = (event) => {
        event.preventDefault();

        const errors = [];

        if (!formValues.current.name.value) {
            errors.push("name");
        }

        if (!formValues.current.description.value) {
            errors.push("description");
        }

        if (!formValues.current.category.value) {
            errors.push("category");
        }

        if (!formValues.current.status.value) {
            errors.push("status");
        }

        if (!formValues.current.quantity.value) {
            errors.push("quantity");
        }

        if (!formValues.current.warehouse.value) {
            errors.push("warehouse");
        }

        setErrors(errors)

        const form = event.target;

        const addItemObj = {
            name: form.name.value,
            description: form.description.value,
            category: form.category.value,
            status: form.status.value,
            quantity: form.quantity.value,
            warehouse: form.warehouse.value
        }

        console.log(addInv);
        console.log(addItemObj);

        axios
            .post('http://localhost:8080/inventory', addItemObj)
            .then((resp) => {
                setAddInv(addInv(resp.data));
            })
            .catch((error) => {
                alert(error.resp.data);
        })
    }

    return (
        <>
            <form className='addform' onSubmit={handleSubmit} ref={formValues}>
                <div className='addform__container'>
                    <div className='addform__details'>
                        <h2 className='addform__title'>Item Details</h2>
                        <InputField
                            // className='addform__input'
                            label="Item Name"
                            placeholder="Item Name"
                            type='text'
                            name='name'
                            errors={errors}
                        />
                        {addInv.name === '' && (
                            <div className='addform__error'>
                                <img
                                    className='addform__error-sign'
                                    src={ErrorSign}
                                    alt='Red Error Sign for Incomplete Form'
                                />
                                <p className='addform__error-text'>This field is required</p>
                            </div>
                        )}
                        <TextareaField
                            label='Description'
                            className='addform__input-description'
                            type='text'
                            name='description'
                            errors={errors}
                        />
                        <label className='addform__label p-medium' htmlFor='category'>Category</label>
                        <select className='addform__dropdown'
                            type='text'
                            name='category'
                            errors={errors}
                        >
                            <option type="text" value=''>Please Select</option>
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
                        <label className='addform__label p-medium'>Status</label>
                        <div className='addform__status'>
                            <div className='addform__status-container'>
                                <input
                                    className='addform__status-radio'
                                    type='radio'
                                    name='status'
                                    errors={errors}
                                />
                                <p className='addform__status-text'>In stock</p>
                            </div>
                            <div className='addform__status-container'>
                                <input
                                    className='addform__status-radio'
                                    type='radio'
                                    name='status'
                                    errors={errors}
                                />
                                <p className='addform__status-text'>Out of stock</p>
                            </div>
                        </div>
                        <label className='addform__label p-medium' htmlFor='name'>Quantity</label>
                        <InputField
                            // className='addform__input'
                            type='number'
                            name='quantity'
                            placeholder='0'
                            errors={errors}
                        />
                        <label className='addform__label p-medium'>Warehouse</label>
                        <select
                            className='addform__dropdown'
                            type='text'
                            name='warehouse'
                            errors={errors}
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