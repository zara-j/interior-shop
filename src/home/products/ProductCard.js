import { CiShare2 } from "react-icons/ci";
import { MdCompareArrows } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

const ProductCard = ({ image, name, description, price, sale }) => {
    return (
        <div className="relative group w-full sm:max-w-sm bg-indigo-50 overflow-hidden">
            <img className="w-full h-[320px] object-cover object-center" src={image} alt={name} />

            <div className="absolute inset-0 bg-neutral-950 bg-opacity-60 translate-x-full group-hover:translate-x-0 flex flex-col justify-center items-center gap-4 transition-transform duration-300 ease-in-out">
                <button className="bg-white text-yellow-700 font-bold text-lg px-12 py-3 transition">
                    Add to Cart
                </button>
                <div className="flex gap-4">
                    <button className="flex items-center justify-center text-white text-lg font-bold hover:bg-indigo-500 hover:text-white transition">
                    <CiShare2 className="mr-1 text-xl"/>{"Share"}
                    </button>
                    <button className="flex items-center justify-center text-white text-lg font-bold hover:bg-indigo-500 hover:text-white transition">
                    <MdCompareArrows className="mr-1 text-xl"/>{"Compare"}
                    </button>
                    <button className="flex items-center justify-center text-white text-lg font-bold hover:bg-indigo-500 hover:text-white transition">
                    <CiHeart className="mr-1 text-xl"/>{"Like"}
                    </button>
                </div>
            </div>

            <div className="p-3">
                <h1 className="font-bold text-2xl">{name}</h1>
                <h2 className="text-muted text-base">{description}</h2>
                <h1 className="font-bold text-2xl flex">
                    {price}
                    {<p className="text-muted text-lg font-normal line-through p-1">
                        {sale}
                    </p>}


                </h1>
            </div>
        </div>
    );
};

export default ProductCard;
