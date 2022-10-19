import "./WarehousesDetailsAdd.scss";
import { Link } from "react-router-dom";
import InputField from "../../components/InputField/InputField";
import NavButton from "../../components/NavButton/NavButton";
import ArrowBack from "../../assets/images/icons/arrow_back-24px.svg";

function WarehousesDetailsAdd() {
    const submitHandle = () => {
        console.log("Hello");
    };

    return (
        <>
            <article className="warehouse-add">
                <div className="warehouse-add__header">
                    <Link to="/warehouses/:id" className="warehouse-add__header-link">
                        <img src={ArrowBack} alt="" className="warehouse-add__header-img" />
                    </Link>
                    <h1>Add New Warehouse</h1>
                </div>

                <form className="warehouse-add__details">
                    <div className="warehouse-add__details-address">
                        <h2 className="warehouse-add__details-address-header">Warehouse Details</h2>
                        <InputField
                            label="Warehouse Name"
                            name="warehouseName"
                            placeholder="Warehouse Name"
                        />
                        <InputField label="Street Address" placeholder="Street Address" />
                        <InputField label="City" placeholder="City" />
                        <InputField label="Country" placeholder="Country" />
                    </div>

                    <div className="warehouse-add__details-contact">
                        <h2 className="warehouse-add__details-contact-header">Contact Details</h2>
                        <InputField label="Contact Name" placeholder="Contact Name" />
                        <InputField label="Position" placeholder="Position" />
                        <InputField label="Phone Number" placeholder="Phone Number" />
                        <InputField label="Email" placeholder="Email" />
                    </div>
                </form>

                <div className="warehouse-add__buttons">
                    <NavButton
                        content="Cancel"
                        backgroundColor="#FFFFFF"
                        fontColor="#5C667E"
                        border="1px solid #BDC5D5"
                    />
                    <NavButton content="+ Add Warehouse" backgroundColor="#2E66E5" />
                </div>
            </article>
        </>
    );
}

export default WarehousesDetailsAdd;
