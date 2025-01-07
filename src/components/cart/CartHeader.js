import cartBg from '../../assets/cartBg.jpg'
import { FaPhoenixSquadron } from 'react-icons/fa';
import { PiGreaterThan } from "react-icons/pi";

const CartHeader = ({title}) => {
    return (
                <div className="relative flex justify-center items-center w-full h-[23rem]"
                 style={{ backgroundImage: `url(${cartBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#ffffffb3', backgroundBlendMode: 'overlay' }}>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-dark text-center">
                        <FaPhoenixSquadron className="text-4xl" />
                        <h1 className="py-2 text-6xl">{title}</h1>
                        <div className="flex justify-center items-center text-1xl p-1">
                            <div className="font-bold"> Home </div>
                            <PiGreaterThan className="mx-1" />
                            <div>{title}</div>
                        </div>
                    </div>
                </div>
    )
};
export default CartHeader