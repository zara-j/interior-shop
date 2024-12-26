import IconNavbar from "./IconNavbar";
import PageLinks from "./PageLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaPhoenixSquadron } from "react-icons/fa";

const MyHeader = ()=> {

    return(
        <div className="bg-light flex flex-row justify-around align-items-center p-4 text-xl">
             <h2 className="flex flex-row"><FaPhoenixSquadron className="m-1" /> Cozy Home</h2>
             <PageLinks />
             <IconNavbar />
        </div>
    )
};
export default MyHeader