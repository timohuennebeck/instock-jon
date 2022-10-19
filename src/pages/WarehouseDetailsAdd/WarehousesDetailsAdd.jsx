import "./WarehousesDetailsAdd.scss";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import InputField from "../../components/InputField/InputField";
import NavButton from "../../components/NavButton/NavButton";
import ArrowBack from "../../assets/images/icons/arrow_back-24px.svg";

function WarehousesDetailsAdd() {
    const formValues = useRef();

    const [errors, setErrors] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = [];

        if (!formValues.current.position.value) {
            errors.push("position");
        } 
        setErrors(errors)
    };

    return (
        <>
            <article className="warehouse-add" onSubmit={handleSubmit}>
                <div className="warehouse-add__header">
                    <Link to="/warehouses/:id" className="warehouse-add__header-link">
                        <img src={ArrowBack} alt="" className="warehouse-add__header-img" />
                    </Link>
                    <h1>Add New Warehouse</h1>
                </div>

                <form className="warehouse-add__details" ref={formValues}>
                    <div className="warehouse-add__details-address">
                        <h2 className="warehouse-add__details-address-header">Warehouse Details</h2>
                        <InputField
                            label="Warehouse Name"
                            placeholder="Warehouse Name"
                            name="warehouseName"
                            errors={errors}
                        />
                        <InputField
                            label="Street Address"
                            placeholder="Street Address"
                            name="streetAddress"
                            errors={errors}
                        />
                        <InputField
                            label="City"
                            placeholder="City"
                            name="city"
                            errors={errors}
                        />
                        <InputField
                            label="Country"
                            placeholder="Country"
                            name="country"
                            errors={errors}
                        />
                    </div>

                    <div className="warehouse-add__details-contact">
                        <h2 className="warehouse-add__details-contact-header">Contact Details</h2>
                        <InputField
                            label="Contact Name"
                            placeholder="Contact Name"
                            name="contactName"
                            errors={errors}
                        />
                        <InputField
                            label="Position"
                            placeholder="Position"
                            name="position"
                            errors={errors}
                        />
                        <InputField
                            label="Phone Number"
                            placeholder="Phone Number"
                            name="phoneNumber"
                            errors={errors}
                        />
                        <InputField
                            label="Email"
                            placeholder="Email"
                            name="email"
                            errors={errors}
                        />
                    </div>
                </form>
                <div className="warehouse-add__buttons">
                    <NavButton
                        content="Cancel"
                        backgroundColor="#FFFFFF"
                        fontColor="#5C667E"
                        border="1px solid #BDC5D5"
                    />
                    <NavButton
                        content="+ Add Warehouse"
                        backgroundColor="#2E66E5"
                        onSubmit={handleSubmit}
                    />
                </div>
            </article>
        </>
    );
}

export default WarehousesDetailsAdd;