import Pagination from '../../components/Pagination'
import ProductList from '../../components/product/ProductList';
import { products } from '../../data/products';

const ShopItems = () => {
    return (
        <div className="bg-white flex flex-col items-center px-12 py-10">
            <ProductList products={products} />
            <Pagination items={products} itemsPerPage={16} />
        </div>
    );
};

export default ShopItems;
