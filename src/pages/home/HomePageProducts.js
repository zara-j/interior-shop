import ProductList from "../../components/product/ProductList";


const HomePageProduct = () => {
    return (
        <div className="bg-white flex flex-col items-center py-10 px-8">
            <h1 className="text-center font-bold text-5xl pb-4 mb-3">Our Products</h1>
            <ProductList limit={8} />
        </div>
    );
};
export default HomePageProduct