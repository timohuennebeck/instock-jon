import "./WarehousesDetailsAdd.scss";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import InputField from "../../components/InputField/InputField";
import NavButton from "../../components/NavButton/NavButton";
import ArrowBack from "../../assets/images/icons/arrow_back-24px.svg";

function WarehousesDetailsAdd() {
    const formValues = useRef();

    const [errors, setErrors] = useState([]);

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const warehouseName = formValues.current.warehouseName.value;
        const streetAddress = formValues.current.streetAddress.value;
        const city = formValues.current.city.value;
        const country = formValues.current.country.value;
        const contactName = formValues.current.contactName.value;
        const position = formValues.current.position.value;
        const phoneNumber = formValues.current.phoneNumber.value;
        const email = formValues.current.email.value;

        const addWarehouseData = {
            id: uuidv4(),
            name: warehouseName,
            address: streetAddress,
            city: city,
            country: country,
            contact: {
                name: contactName,
                position: position,
                phone: phoneNumber,
                email: email,
            },
        };

        const errors = [];

        if (!warehouseName) {
            errors.push("warehouseName");
        }

        if (!streetAddress) {
            errors.push("streetAddress");
        }

        if (!city) {
            errors.push("city");
        }

        if (!country) {
            errors.push("country");
        }

        if (!contactName) {
            errors.push("contactName");
        }

        if (!position) {
            errors.push("position");
        }

        if (!phoneNumber) {
            errors.push("phoneNumber");
        }

        if (!email) {
            errors.push("email");
        }

        setErrors(errors);

        if (errors.length === 0) {
            
            axios
                .post("http://localhost:8080/warehouses/add", addWarehouseData)
                .then((event) => {
                    event.preventDefault()
                    console.log("Data has been sent!");
                    // navigate('/');

                    
                })
                .catch((err) => {
                    console.log(err, "Error!");
                });
        }
        if (errors.length === 0) {
            alert('Thanks adding warehouse!');
            
            navigate('/')

        } 
        

    };

    

    return (
        <>
            <article className="warehouse-add" onSubmit={handleSubmit}>
                <div className="warehouse-add__header">
                    <Link to="/warehouses/" className="warehouse-add__header-link">
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
                        <InputField label="City" placeholder="City" name="city" errors={errors} />
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
                        link='/warehouses'
                    />
                    <NavButton
                        content="+ Add Warehouse"
                        backgroundColor="#2E66E5"
                        onClick={handleSubmit}
                        
                    />
                </div>
            </article>
        </>
    );
}

export default WarehousesDetailsAdd;
