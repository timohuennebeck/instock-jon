import "./DeleteInventory.scss";
import NavButton from "../NavButton/NavButton";
import CloseIcon from "../../assets/images/icons/close-24px.svg";
import { useNavigate, Link } from "react-router-dom";
import { useParams} from "react-router-dom";
import axios from "axios";

function DeleteInventory({selectedInventoryName, closeModal}) {  
    const {id} = useParams()   

    const reload = ()=> {
        window.location.reload()
    }

    const navigate = useNavigate()
    const baseURL = 'http://localhost:8080/inventory'

    const handleDelete = (event) => {
        event.preventDefault();
        axios.delete(`${baseURL}/${id}/delete`)
        closeModal()
        alert('Inventory deleted');
        navigate('/inventory')
        reload()
        
    }

    return (
     
                <article className="inventory-delete">
                    <div className="inventory-delete__container">
                        <Link to='/'>
                            <img onClick={closeModal} className="inventory-delete__img" src={CloseIcon} alt="Close" />
                        </Link>
                        
                        <div className="inventory-delete__content">
                            <h1 className="inventory-delete__content-header">{`Delete ${selectedInventoryName} inventory item?`}</h1>
                            <p className="inventory-delete__content-message">
                                {`Please confirm that you'd like to delete ${selectedInventoryName} 
                                from the inventory list. You won't be able to undo this action.`}
                            </p>
                        </div>
                    </div>

                    <div className="inventory-delete__buttons">
                        <Link  to='/inventory' className="button-link ">
                            <button  onClick={closeModal} className="button inventory-delete__buttons-cancel">Cancel</button>
                        </Link>
                        <Link className="button-link ">
                            <button onClick={handleDelete} className="button inventory-delete__buttons-delete">Delete</button>
                        </Link>
                    </div>
                </article>
       
    );
}

export default DeleteInventory;
