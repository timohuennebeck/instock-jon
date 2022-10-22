import "./EditInventoryForm.scss";
import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import InputField from "../../components/InputField/InputField";
import TextareaField from "../../components/TextareaField/TextareaField";
import SelectField from "../../components/SelectCategoryField/SelectCategoryField";
import SelectWareField from "../../components/SelectWareField/SelectWareField";
import NavButton from "../../components/NavButton/NavButton";

export default function EditInventoryForm() {
    const { id } = useParams();
    const formValues = useRef();
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate()

    const [populateData, setPopulateData] = useState(null);

    const [selected, setSelected] = useState(null);

    const handleInputChange = (e) => {
        setPopulateData({ ...populateData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        axios
            .get(`http://localhost:8080/inventory/${id}`)
            .then((resp) => {
                setPopulateData(resp.data);
                setSelected(resp.data.status);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    if (!populateData) {
        return <p>Loading...</p>;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const errors = [];

        if (!formValues.current.itemName.value) {
            errors.push("itemName");
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

        if (!formValues.current.warehouseName.value) {
            errors.push("warehouseName");
        }

        setErrors(errors);

        if (errors.length === 0) {
            axios
                .put(`http://localhost:8080/inventory/${id}`, populateData)
                .then(() => {
                    console.log("Data has been sent!");
                    
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        if (errors.length === 0) {
            alert('Inventory Edited');
            navigate('/inventory');
        } 
    };

    return (
        <>
            <form className="addform" onSubmit={handleSubmit} ref={formValues}>
                <div className="addform__container">
                    <div className="addform__details">
                        <h2 className="addform__title">Item Details</h2>
                        <InputField
                            label="Item Name"
                            placeholder="Item Name"
                            type="text"
                            name="itemName"
                            errors={errors}
                            value={populateData.itemName}
                            onChange={handleInputChange}
                        />
                        <TextareaField
                            label="description"
                            type="text"
                            name="description"
                            errors={errors}
                            value={populateData.description}
                            onChange={handleInputChange}
                        />
                        <SelectField
                            label="Category"
                            type="text"
                            name="category"
                            errors={errors}
                            value={populateData.category}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="addform__line"></div>
                    <div className="addform__available">
                        <h2 className="addform__title">Item Availability</h2>
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




                        <SelectWareField
                            label="Warehouse"
                            type="text"
                            name="warehouseName"
                            errors={errors}
                            value={populateData.warehouseName}
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
    );
}
