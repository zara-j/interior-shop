import { Link } from "react-router-dom"

const PageLinks =()=>{
    return(
        <>
        <nav className="flex flex-row">
            <Link to="#" className="text-dark swrl rounded-md px-6 no-underline">Home</Link>
            <Link to="#" className="text-dark swrl rounded-md px-6 no-underline">Shop</Link>
            <Link to="#" className="text-dark swrl rounded-md px-6 no-underline">About</Link>
            <Link to="#" className="text-dark swrl rounded-md px-6 no-underline">Contact</Link>
        </nav>
        </>
    )
}
export default PageLinks