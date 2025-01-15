import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";

const IconNavbar = (
) => {
    return (
        <div className="flex justify-center">
            <Link to="/checkout" className="text-dark px-4 no-underline">
                <h3><FaRegUser /></h3>
            </Link>
            <Link to="/cart" className="text-dark px-4 no-underline">
                <h3> <HiMiniMagnifyingGlass /></h3>
            </Link>
            <Link to="/checkout" className="text-dark px-4 no-underline">
                <h3><IoIosHeartEmpty /></h3>
            </Link>
            <Link to="/cart" className="text-dark px-4 no-underline">
                <h3><IoCartOutline /></h3>
            </Link>
        </div>
    );
};

export default IconNavbar;
