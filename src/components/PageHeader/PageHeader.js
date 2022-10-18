import { Link } from "react-router-dom"
import instockLogo from '../../assets/images/logo/InStock-Logo.svg'
import './PageHeader.scss'

export default function PageHeader () {
    return(

    
<div className="Nav">

    <div className="Nav__logo">
    <img src={instockLogo}/>
    </div>

    <div className="Nav__links-container">

        <Link className="Nav__link Nav__left">
            <button>
                <h3>Warehouses</h3>
            </button>
            
        </Link>
  
        <Link className="Nav__link">
            <button>
                <h3>Inventory</h3>  
            </button>  
        </Link>
   
    </div>

    
   




</div>
)
}