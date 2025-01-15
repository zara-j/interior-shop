import CartFooter from "../../components/cart/CartFooter";
import CartHeader from "../../components/cart/CartHeader";
import Footer from "../../components/footer/Footer";
import MyHeader from "../../components/header/MyHeader";
import Posts from "./Posts";

const Blog = () => {
    return (
        <div className="bg-black min-h-screen overflow-x-hidden">
            <div className="bg-white max-w-[1400px] mx-auto">
                <MyHeader />
                <CartHeader title="Blog" />
                <Posts />
                <CartFooter />
                <Footer />
            </div>

        </div>
    )
};
export default Blog