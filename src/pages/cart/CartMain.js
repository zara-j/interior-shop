import { TbSquareNumber1 } from "react-icons/tb";
import { FaTrash } from "react-icons/fa";
import sofa from '../../assets/sofa.jpg';
import SubtotalCard from "./../cart/SubtotalCard";
import CartFooter from "./../cart/CartFooter";

const CartMain = () => {
    return (
        <div className="bg-white">
            <div className="container py-16 pt-16 flex xl:justify-around xl:flex-row flex-col">
                <table className="hidden xl:table text-center lg:text-lg">
                    <tr className="bg-purple-50">
                        <th className="lg:px-3 lg:py-0.5"></th>
                        <th className="lg:px-3 lg:py-0.5">Product</th>
                        <th className="lg:px-3 lg:py-0.5">Price</th>
                        <th className="lg:px-3 lg:py-0.5">Quantity</th>
                        <th className="lg:px-3 lg:py-0.5">Subtotal</th>
                        <th className="lg:px-3 lg:py-0.5"></th>
                    </tr>
                    <tr className="text-wrap">
                        <th className="lg:px-4 lg:py-3"><img src={sofa} alt="product picture" className="w-32 h-32 object-cover rounded" /></th>
                        <td className="lg:px-4 lg:py-3 text-muted">Asgaard sofa</td>
                        <td className="lg:px-4 lg:py-3 text-muted">Rs.250,000.00</td>
                        <td className="lg:px-4 lg:py-3 lg:text-4xl text-center"><TbSquareNumber1 /></td>
                        <td className="lg:px-4 lg:py-3">Rs.250,000.00</td>
                        <td className="lg:px-4 lg:py-3 lg:text-2xl text-center text-yellow-600"><FaTrash /></td>
                    </tr>
                </table>

                <div className="block xl:hidden space-y-4 mb-4 mr-2 w-full">
                    <div className="flex items-center border rounded-lg p-4 shadow">
                        <img src={sofa} alt="product" className="w-24 h-24 object-cover rounded" />
                        <div className="ml-4 space-y-1">
                            <p className="text-lg font-medium">Asgaard sofa</p>
                            <p className="text-muted">Rs.250,000.00</p>
                            <div className="flex items-center justify-between">
                                <div className="text-4xl"><TbSquareNumber1 /></div>
                                <p className="text-yellow-600 text-2xl"><FaTrash /></p>
                            </div>
                            <p className="text-lg font-semibold">Subtotal: Rs.250,000.00</p>
                        </div>
                    </div>
                </div>

                <div>
                    <SubtotalCard />
                </div>
            </div>
            <div>
                <CartFooter />
            </div>
        </div>
    )
};
export default CartMain