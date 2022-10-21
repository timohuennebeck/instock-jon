import "./EditInventoryForm.scss";
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import InputField from "../../components/InputField/InputField";
import TextareaField from "../../components/TextareaField/TextareaField";
import SelectField from "../../components/SelectCategoryField/SelectCategoryField";
import SelectWareField from "../../components/SelectWareField/SelectWareField";
import RadioField from "../../components/RadioField/RadioField";

export default function EditInventoryForm() {
    const { id } = useParams();
    const formValues = useRef();
    const [errors, setErrors] = useState([]);

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
                        <div>
                            {/* <RadioField
                                label="Status"
                                type="radio"
                                name="status"
                                errors={errors}
                                value={populateData.status}
                                onChange={handleInputChange}
                            /> */}
                            <label>In Stock</label>
                            <input
                                className="radio-field__value"
                                type="radio"
                                value="In Stock"
                                name="status"
                                checked={populateData.status === "In Stock"}
                                onChange={handleInputChange}
                            />
                            <label>Out of Stock</label>
                            <input
                                className="radio-field__value"
                                type="radio"
                                value="Out of Stock"
                                name="status"
                                checked={populateData.status === "Out of Stock"}
                                onChange={handleInputChange}
                            />
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
                <div className="addform__button">
                    <div className="addform__button-container">
                        <button className="addform__button-cancel">Cancel</button>
                        <button className="addform__button-save">+Add Item</button>
                    </div>
                </div>
            </form>
        </>
    );
}
