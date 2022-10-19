import "./WarehousesDetailsEdit.scss";
import InputField from "../../components/InputField/InputField";
import NavButton from "../../components/NavButton/NavButton";
import ArrowBack from "../../assets/images/icons/arrow_back-24px.svg";

function WarehousesDetailsEdit() {
    return (
        <>
            <article className="warehouse-edit">
                <div className="warehouse-edit__header">
                    <img src={ArrowBack} alt="" />
                    <h1>Edit Warehouse</h1>
                </div>

                <div className="warehouse-edit__details">
                    <h2>Warehouse Details</h2>
                    <InputField label="Warehouse Name" value="Washington"/>
                </div>

                {/* <div className="warehouse-edit__contact">

                </div> */}
                

                <div className="warehouse-edit__buttons">
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

export default WarehousesDetailsEdit;
