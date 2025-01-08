import CartFooter from "../../components/cart/CartFooter";
import CartHeader from "../../components/cart/CartHeader";
import Footer from "../../components/footer/Footer";
import MyHeader from "../../components/header/MyHeader";
import ShopItems from "./ShopItems";

const Shop = () => {
    return (
        <div className="bg-black min-h-screen overflow-x-hidden">
            <div className="bg-white max-w-[1600px] mx-auto">
                <MyHeader />
                <CartHeader title="Shop" />
                <ShopItems />
                <CartFooter />
                <Footer />
            </div>
        </div>
    )
};
export default Shop