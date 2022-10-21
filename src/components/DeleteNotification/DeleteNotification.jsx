import "./DeleteNotification.scss";
import CloseIcon from "../../assets/images/icons/close-24px.svg";
import { useNavigate, Link } from "react-router-dom";
import { useParams} from "react-router-dom";
import axios from "axios";

const baseURL = `http://localhost:8080/warehouses`;


function DeleteNotification({selectedWarehouseName,id}) {  
    

    const handleClose = ()=>{
        document.querySelector('.delete-warehouse').close()
    }
    const navigate = useNavigate()
    const handleDelete = (event) => {
        event.preventDefault();
        axios.delete(`${baseURL}/${id}/delete`)
        document.querySelector('.delete-warehouse').close()
        navigate('/')
    }

    return (
        <>
            <div >
                <article className="warehouse-delete">
                    <Link to='/'>
                        <img onClick={handleClose} className="warehouse-delete__img" src={CloseIcon} alt="Close" />
                    </Link>
                    
                    <div className="warehouse-delete__content">
                        <h1 className="warehouse-delete__content-header">{`Delete ${selectedWarehouseName} warehouse?`}</h1>
                        <p className="warehouse-delete__content-message">
                            {`Please confirm that you'd like to delete the ${selectedWarehouseName} warehouse
                            from the list of warehouses. You won't be able to undo this action.`}
                        </p>
                    </div>

                    <div className="warehouse-delete__buttons">
                        <Link  to='/' className="button-link ">
                            <button  onClick={handleClose} className="button warehouse-delete__buttons-cancel">Cancel</button>
                        </Link>
                        <Link className="button-link ">
                            <button onClick={handleDelete} className="button warehouse-delete__buttons-delete">Delete</button>
                        </Link>
                    </div>
                </article>
            </div>
        </>
    );
}

export default DeleteNotification;
