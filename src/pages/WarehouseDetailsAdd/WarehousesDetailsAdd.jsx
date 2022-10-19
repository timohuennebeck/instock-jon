import "./WarehousesDetailsAdd.scss";
import { Link } from "react-router-dom";
import { useRef } from "react";
import InputField from "../../components/InputField/InputField";
import NavButton from "../../components/NavButton/NavButton";
import ArrowBack from "../../assets/images/icons/arrow_back-24px.svg";

function WarehousesDetailsAdd() {
    const formValues = useRef();

    const handleSubmit = () => {
        console.log(formValues.current.contactName.value);
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
                        />
                        <InputField
                            label="Street Address"
                            placeholder="Street Address"
                            name="streetAddress"
                        />
                        <InputField 
                            label="City" 
                            placeholder="City" 
                            name="city" 
                        />
                        <InputField 
                            label="Country" 
                            placeholder="Country" 
                            name="country" 
                        />
                    </div>

                    <div className="warehouse-add__details-contact">
                        <h2 className="warehouse-add__details-contact-header">Contact Details</h2>
                        <InputField
                            label="Contact Name"
                            placeholder="Contact Name"
                            name="contactName"
                        />
                        <InputField 
                            label="Position" 
                            placeholder="Position" 
                            name="position" 
                        />
                        <InputField
                            label="Phone Number"
                            placeholder="Phone Number"
                            name="phoneNumber"
                        />
                        <InputField 
                            label="Email" 
                            placeholder="Email" 
                            name="email" 
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
