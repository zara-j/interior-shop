import IconNavbar from "./IconNavbar";
import PageLinks from "./PageLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimneyMedical } from "@fortawesome/free-solid-svg-icons";

const MyHeader = ()=> {

    return(
        <div className="flex justify-around align-items-center p-4 text-2xl">
             <h1><FontAwesomeIcon icon={faHouseChimneyMedical} />Cozy Home</h1>
             <PageLinks />
             <IconNavbar />
        </div>
    )
};
export default MyHeader