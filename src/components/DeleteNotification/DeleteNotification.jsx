import "./DeleteNotification.scss";
import NavButton from "../NavButton/NavButton";
import CloseIcon from "../../assets/images/icons/close-24px.svg";

function DeleteNotification() {
    return (
        <>
            <div >
                <article className="warehouse-delete">
                    <img className="warehouse-delete__img" src={CloseIcon} alt="" />
                    <div className="warehouse-delete__content">
                        <h1 className="warehouse-delete__content-header">Delete "placeholder" warehouse?</h1>
                        <p className="warehouse-delete__content-message">
                            Please confirm that you'd like to delete the "placeholder" warehouse
                            from the list of warehouses. You won't be able to undo this action.
                        </p>
                    </div>

                    <div className="warehouse-delete__buttons">
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

export default DeleteNotification;
