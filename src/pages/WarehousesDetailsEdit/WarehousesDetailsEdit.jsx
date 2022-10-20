import "./WarehousesDetailsEdit.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import InputField from "../../components/InputField/InputField";
import NavButton from "../../components/NavButton/NavButton";
import ArrowBack from "../../assets/images/icons/arrow_back-24px.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function WarehousesDetailsEdit() {
    const { id } = useParams();

    const [userInput, setUserInput] = useState([]);

    const handleChange = (e) => {
        setUserInput({ [e.target.name]: e.target.value });
    };

    console.log(userInput);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/warehouses/${id}`)
            .then((resp) => {
                setUserInput((recentInput) => ({
                    ...recentInput,
                    name: resp.data.warehouseDetails[0].name,
                }));
            })
            .catch((err) => {
                console.log(err, "Error!");
            });
    }, []);

    if (!userInput) {
        return <p>Loading...</p>;
    }

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

                        <input
                            name="Street Address"
                            value={userInput.name}
                            onChange={handleChange}
                        />

                        <InputField label="Warehouse Name" value="placeholder" />
                        <InputField label="Street Address" value="placeholder" />
                        <InputField label="City" value="placeholder" />
                        <InputField label="Country" value="placeholder" />
                    </div>

                    <div className="warehouse-edit__details-contact">
                        <h2 className="warehouse-edit__details-contact-header">Contact Details</h2>
                        <InputField label="Contact Name" value="placeholder" />
                        <InputField label="Position" value="placeholder" />
                        <InputField label="Phone Number" value="placeholder" />
                        <InputField label="Email" value="placeholder" />
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
