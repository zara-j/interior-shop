import CartFooter from "../../components/cart/CartFooter";
import CartHeader from "../../components/cart/CartHeader";
import Footer from "../../components/footer/Footer";
import MyHeader from "../../components/header/MyHeader";
import ContactInfo from "./ContactInfo";

const Contact=()=>{
    return(
        <div className="bg-black overflow-x-hidden">
            <div className="bg-white max-w-[1400px] mx-auto">
                <MyHeader />
                <CartHeader title="Contact"/>
                <ContactInfo />
                <CartFooter />
                <Footer />
            </div>
        </div>
    )
};
export default Contact