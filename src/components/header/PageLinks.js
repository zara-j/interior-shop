import { Link } from "react-router-dom"

const PageLinks =()=>{
    return(
        <>
        <nav className="flex flex-row justify-center">
            <Link to="#" className="text-dark swrl rounded-md px-3 no-underline p-7">Home</Link>
            <Link to="#" className="text-dark swrl rounded-md px-3 no-underline p-7">Shop</Link>
            <Link to="#" className="text-dark swrl rounded-md px-3 no-underline p-7">About</Link>
            <Link to="#" className="text-dark swrl rounded-md px-3 no-underline p-7">Contact</Link>
        </nav>
        </>
    )
}
export default PageLinks