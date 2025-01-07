import CartFooter from "../../components/cart/CartFooter";
import CartHeader from "../../components/cart/CartHeader";
import Footer from "../../components/footer/Footer";
import MyHeader from "../../components/header/MyHeader";
import Billing from "./Billing";

const Checkout = () => {
  return (
    <div>
      <div className="bg-black overflow-x-hidden">
        <div className="bg-white max-w-[1600px] mx-auto">
          <MyHeader />
          <CartHeader title="Checkout" />
          <Billing />
          <CartFooter />
          <Footer />
        </div>
      </div>
    </div>
  )
};
export default Checkout