import Payment from "./Payment";

const CheckoutTotal = () => {
    return (
        <div className="w-full">
            <div className="px-14 text-center py-24">
                <div className="flex justify-between p-3 text-3xl font-semibold">
                    <span className="mx-2">Product</span>
                    <span className="mx-2">Subtotal</span>
                </div>
                <div className="flex justify-between p-3">
                    <span className="mx-2 text-lg text-muted">Asgaard sofa<spna className="text-black ml-1">x 1</spna></span>
                    <span className="mx-2 text-lg">Rs.250,000,00</span>
                </div>
                <div className="flex justify-between p-3">
                    <span className="mx-2 text-lg">Subtotal</span>
                    <span className="mx-2 text-lg">Rs.250,000,00</span>
                </div>
                <div className="flex justify-between p-3">
                    <span className="mx-2 text-lg">Total</span>
                    <span className="mx-2 text-2xl font-extrabold text-yellow-700">Rs.250,000,00</span>
                </div>
                <hr/>
                <Payment />
            </div>
        </div>
    )
};
export default CheckoutTotal