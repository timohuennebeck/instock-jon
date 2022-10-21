import './EditInventoryForm.scss';
import { useState, useRef } from "react";
import axios from 'axios';
import InputField from "../../components/InputField/InputField";
import TextareaField from '../../components/TextareaField/TextareaField';
import SelectField from '../../components/SelectCategoryField/SelectCategoryField';
import SelectWareField from '../../components/SelectWareField/SelectWareField';
import RadioField from '../../components/RadioField/RadioField';

export default function EditInventoryForm() {
    const formValues = useRef();
    const [errors, setErrors] = useState([]);

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

        if (!formValues.current.warehouse.value) {
            errors.push("warehouse");
        }

        setErrors(errors)

        const editItemObj = {
            
            name: form.name.value,
            description: form.description.value,
            category: form.category.value,
            status: form.status.value,
            warehouse: form.warehouse.value
        }

        axios
            .put('http://localhost:8080/inventory', editItemObj)
            .then((resp) => {
                setEditInv(editInv(resp.data));
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
                        <div>
                            <RadioField
                                label='Status'
                                type='radio'
                                name='status'
                                errors={errors}
                            />
                        </div>
                        <SelectWareField
                            label='Warehouse'
                            type='text'
                            name='warehouse'
                            errors={errors}
                        />
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