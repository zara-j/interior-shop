import { useState } from 'react';
import ProductCard from './ProductCard';
import { products } from '../../data/products';
const ProductList = ({ limit }) => {
    const [showAll, setShowAll] = useState(false)


    const visibleProducts = showAll || !limit ? products : products.slice(0, limit)
    return (
        <div className="bg-white flex flex-col items-center py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-5">
                {visibleProducts.map((product, index) => (
                    <ProductCard
                        key={index}
                        image={product.image}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        sale={product.sale}
                    />
                ))}
            </div>
            {limit && (
                <button onClick={() => setShowAll(!showAll)}
                    className="text-lg font-bold border-2 border-yellow-600 text-yellow-600 px-16 py-3 mt-4">
                    {showAll ? 'Show Less' : 'Show More'}
                </button>
            )}
        </div>
    );
};

export default ProductList;
