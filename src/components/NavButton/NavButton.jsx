import "./NavButton.scss";
import { Link } from "react-router-dom";

function NavButton({ link, content, backgroundColor, fontColor, border, onClick }) {
    return (
        <Link to={link} className="button-link">
            <button
                onClick={onClick}
                className="button"
                style={{
                    backgroundColor: `${backgroundColor}`,
                    color: `${fontColor}`,
                    border: `${border}`,
                }}
            >
                {content}
            </button>
        </Link>
    );
}

export default NavButton;
