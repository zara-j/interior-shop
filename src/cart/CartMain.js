import { TbSquareNumber1 } from "react-icons/tb";
import { FaTrash } from "react-icons/fa";

import sofa from '../assets/sofa.jpg';

const CartMain = () => {
    return (
        <div className="bg-white">
            <div className="container py-10 pt-5 flex justify-around">
                <table className="text-center text-lg">
                    <tr className="bg-accent-light">
                        <th className="px-3 py-0.5"></th>
                        <th className="px-3 py-0.5">Product</th>
                        <th className="px-3 py-0.5">Price</th>
                        <th className="px-3 py-0.5">Quantity</th>
                        <th className="px-3 py-0.5">Subtotal</th>
                        <th className="px-3 py-0.5"></th>
                    </tr>
                    <tr className="">
                        <th className="px-4 py-3"><img src={sofa} alt="product picture" className="w-32 h-32 object-cover rounded" /></th>
                        <td className="px-4 py-3 text-muted">Asgaard sofa</td>
                        <td className="px-4 py-3 text-muted">Rs.250,000.00</td>
                        <td className="px-4 py-3 text-4xl text-center"><TbSquareNumber1 /></td>
                        <td className="px-4 py-3">Rs.250,000.00</td>
                        <td className="px-4 py-3 text-2xl text-center text-yellow-600"><FaTrash /></td>
                    </tr>
                </table>
                <div>
                    <div className="py-8 px-14 bg-accent-light text-lg text-center">
                        <h1 className="p-5 pt-0 font-bold">Cart Totals</h1>
                        <div className="flex justify-between p-3">
                            <span className="mx-2 font-semibold">Subtotal</span>
                            <span className="mx-2 text-muted">Rs.250,000.00</span>
                        </div>
                        <div className="flex justify-between p-3 mb-3">
                            <span className="mx-2 font-semibold">Total</span>
                            <span className="mx-2 text-yellow-700 text-xl">Rs.250,000.00</span>
                        </div>
                        <button className="border-2 border-black rounded-2xl px-12 py-3 mb-8 m-3 text-2xl">Check Out</button>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default CartMain