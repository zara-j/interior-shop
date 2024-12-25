import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faUser, faMagnifyingGlass, faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";


const IconNavbar = (
) => {
    return (
        <div>
            <div className="flex">
                <Link to="/profile" className="text-dark swrl rounded-md px-3 no-underline p-7">
                    <FontAwesomeIcon icon={faUser} />
                </Link>
                <Link to="/search" className="text-dark swrl rounded-md px-3 no-underline p-7">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Link>
                <Link to="/favorites"className="text-dark swrl rounded-md px-3 no-underline p-7">
                    <FontAwesomeIcon icon={faHeart} />
                </Link>
                <Link to="/cart" className="text-dark swrl rounded-md px-3 no-underline p-7">
                    <FontAwesomeIcon icon={faCartShopping} />
                </Link>

            </div>
        </div>
    );
};

export default IconNavbar;
