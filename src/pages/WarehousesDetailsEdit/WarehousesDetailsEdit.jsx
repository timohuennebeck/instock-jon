import "./WarehousesDetailsEdit.scss";
import { Link } from "react-router-dom";
import InputField from "../../components/InputField/InputField";
import NavButton from "../../components/NavButton/NavButton";
import ArrowBack from "../../assets/images/icons/arrow_back-24px.svg";

function WarehousesDetailsEdit() {
    return (
        <>
            <article className="warehouse-edit">
                <div className="warehouse-edit__header">
                    <Link to="/warehouses/:id" className="warehouse-edit__header-link">
                        <img src={ArrowBack} alt="" className="warehouse-edit__header-img" />
                    </Link>
                    <h1>Edit Warehouse</h1>
                </div>

                <form className="warehouse-edit__details">
                    <div className="warehouse-edit__details-address">
                        <h2 className="warehouse-edit__details-address-header">
                            Warehouse Details
                        </h2>
                        <InputField label="Warehouse Name" value="Placeholder" />
                        <InputField label="Street Address" value="Placeholder" />
                        <InputField label="City" value="Placeholder" />
                        <InputField label="Country" value="Placeholder" />
                    </div>

                    <div className="warehouse-edit__details-contact">
                        <h2 className="warehouse-edit__details-contact-header">Contact Details</h2>
                        <InputField label="Contact Name" value="Placeholder" />
                        <InputField label="Position" value="Placeholder" />
                        <InputField label="Phone Number" value="Placeholder" />
                        <InputField label="Email" value="Placeholder" />
                    </div>
                </form>

                <div className="warehouse-edit__buttons">
                    <NavButton
                        content="Cancel"
                        backgroundColor="#FFFFFF"
                        fontColor="#5C667E"
                        border="1px solid #BDC5D5"
                    />
                    <NavButton content="Save" backgroundColor="#2E66E5" />
                </div>
            </article>
        </>
    );
}

export default WarehousesDetailsEdit;
