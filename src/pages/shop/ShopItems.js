import Pagination from '../../components/Pagination'
import { products } from '../../data/products';

const ShopItems = () => {
    return (
        <div className="bg-white flex flex-col items-center py-10">
            <Pagination items={products} itemsPerPage={8} />
        </div>
    );
};

export default ShopItems;
