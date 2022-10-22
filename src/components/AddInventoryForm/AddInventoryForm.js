import './AddInventoryForm.scss';
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import InputField from "../../components/InputField/InputField";
import TextareaField from '../../components/TextareaField/TextareaField';
import SelectField from '../../components/SelectCategoryField/SelectCategoryField';
import SelectWareField from '../../components/SelectWareField/SelectWareField';
// import RadioField from '../../components/RadioField/RadioField';
import NavButton from "../../components/NavButton/NavButton";

export default function AddInventoryForm() {
    const formValues = useRef();
    const [addInv, setAddInv] = useState([]);

    const [errors, setErrors] = useState([]);

    const navigate = useNavigate()

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

        // if (!formValues.current.status.value) {
        //     errors.push("status");
        // }

        if (!formValues.current.quantity.value) {
            errors.push("quantity");
        }

        if (!formValues.current.warehouse.value) {
            errors.push("warehouse");
        }

        setErrors(errors)

        const form = event.target;

        const addItemObj = {
            id: uuidv4(),
            itemName: form.name.value,
            description: form.description.value,
            category: form.category.value,
            status: form.status.value,
            quantity: form.quantity.value,
            warehouseName: form.warehouse.value
        };
        if (errors.length === 0){
            axios
            .post('http://localhost:8080/inventory', addItemObj)
            .then((resp) => {
                setAddInv(resp.data);
                alert('Thanks for adding inventory!');
                navigate('/inventory');
            })
            .catch((error) => {
                console.log(error, "Error!");
            })

        }

    }

    return (
        <>
            <form className='addform' onSubmit={handleSubmit} ref={formValues}>
                <div className='addform__container'>
                    <div className='addform__details'>
                        <h2 className='addform__title'>Item Details</h2>
                        <InputField
                            label="Item Name"
                            placeholder="Item Name"
                            type='text'
                            name='name'
                            errors={errors}
                        />
                        <TextareaField
                            label='Description'
                            type='text'
                            name='description'
                            errors={errors}
                        />
                        <SelectField
                            label='Category'
                            type='text'
                            name='category'
                            errors={errors}
                        />
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
                                value='In stock'
                                />
                                <p className='addform__status-text'>In stock</p>
                            </div>
                            <div className='addform__status-container'>
                                <input 
                                className='addform__status-radio' 
                                type='radio' 
                                name='status'
                                value='Out of stock'
                                />
                                <p className='addform__status-text'>Out of stock</p>
                            </div>
                        </div>
                            {/* <RadioField
                                label='Status'
                                type='radio'
                                name='status'
                                errors={errors}
                            /> */}
                        <InputField
                            label='Quantity'
                            type='number'
                            name='quantity'
                            placeholder='0'
                            errors={errors}
                        />
                        <SelectWareField
                            label='Warehouse'
                            type='text'
                            name='warehouse'
                            errors={errors}
                        />
                    </div>
                </div>
                
                <div className="warehouse-edit__buttons">
                        
                        <NavButton
                        content="Cancel"
                        backgroundColor="#FFFFFF"
                        fontColor="#5C667E"
                        border="1px solid #BDC5D5"
                        link='/inventory'
                    />
                     <NavButton content="Save" backgroundColor="#2E66E5" />

                        
            
                </div>
                
            </form>
        </>
    )
}