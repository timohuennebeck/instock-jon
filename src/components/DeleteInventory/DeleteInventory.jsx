import "./DeleteInventory.scss";
import NavButton from "../NavButton/NavButton";
import CloseIcon from "../../assets/images/icons/close-24px.svg";

function DeleteInventory() {
    return (
        <>
            <div className="transparent-background">
                <article className="delete">
                    <img className="delete__img" src={CloseIcon} alt="" />
                    <div className="delete__content">
                        <h1 className="delete__content-header">
                            Delete "placeholder" inventory item?
                        </h1>
                        <p className="delete__content-message">
                            Please confirm that you'd like to delete the "placeholder" warehouse
                            from the list of warehouses. You won't be able to undo this action.
                        </p>
                    </div>

                    <div className="delete__buttons">
                        <NavButton
                            content="Cancel"
                            fontColor="#13182C"
                            backgroundColor="#FFFFFF"
                            border="1px solid #BDC5D5"
                        />
                        <NavButton content="Delete" backgroundColor="#C94515" />
                    </div>
                </article>
            </div>
        </>
    );
}

export default DeleteInventory;
