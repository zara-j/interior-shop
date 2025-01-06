import { Link } from "react-router-dom";

const PageLinks = () => {
    return (
        <nav className="flex flex-col md:flex-row justify-center items-center md:p-1 space-y-4 md:space-y-0 text-lg font-semibold">
            <Link to="/" className="text-dark rounded-md px-6 py-2 no-underline hover:bg-gray-100 w-full text-center">Home</Link>
            <Link to="#" className="text-dark rounded-md px-6 py-2 no-underline hover:bg-gray-100 w-full text-center">Shop</Link>
            <Link to="#" className="text-dark rounded-md px-6 py-2 no-underline hover:bg-gray-100 w-full text-center">About</Link>
            <Link to="#" className="text-dark rounded-md px-6 py-2 no-underline hover:bg-gray-100 w-full text-center">Contact</Link>
        </nav>
    );
};
export default PageLinks;