import { Link } from "react-router-dom";
import instockLogo from "../../assets/images/logo/InStock-Logo.svg";
import "./PageHeader.scss";

export default function PageHeader() {
  return (
    <div className="Nav">
      <Link to='/'>
        <div className="Nav__logo">
          <img src={instockLogo} alt="Instock Logo" />
        </div>
      </Link>
      

      <div className="Nav__links-container">
        <Link className="Nav__link Nav__left" to='/warehouses'>
          <button className="Nav__btn">Warehouses</button>
        </Link>

        <Link className="Nav__link" to='/inventory'>
          <button className="Nav__btn">Inventory</button>
        </Link>
      </div>
    </div>
  );
}
