import MyHeader from "../../components/header/MyHeader";
import CartHeader from "../../components/cart/CartHeader";
import CartTable from "./CartTable";
import CartFooter from "../../components/cart/CartFooter";
import Footer from "../../components/footer/Footer";

const CartMain = () => {
    return (
        <div className="bg-black overflow-x-hidden">
            <div className="bg-white max-w-[1400px] mx-auto">
                <MyHeader />
                <CartHeader title="Cart"/>
                <CartTable />
                <CartFooter />
                <Footer />
            </div>


        </div>

    )
};
export default CartMain