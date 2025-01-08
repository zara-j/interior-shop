import { useState } from 'react';
import ProductCard from './ProductCard';
import cafeChair1 from '../../assets/cafeChair.jpg';
import cafeChair2 from '../../assets/cafeChair2.jpg';
import bigSofa from '../../assets/bigSofa.jpg';
import outdoorTable from '../../assets/outdoorTable.jpg';
import lamp from '../../assets/lamp.jpg';
import mug from '../../assets/mug.jpg';
import bed from '../../assets/bed.jpg';
import pot from '../../assets/pot.jpg';
import furniture10 from '../../assets/furniture10.jpg';
import furniture11 from '../../assets/furniture11.jpg';
import furniture12 from '../../assets/furniture12.jpg';
import furniture13 from '../../assets/furniture13.jpg';
import furniture14 from '../../assets/furniture14.jpg';
import furniture15 from '../../assets/furniture15.jpg';
import furniture16 from '../../assets/furniture16.jpg';
import furniture17 from '../../assets/furniture17.jpg';

const ProductList = ({ limit }) => {
    const [showAll, setShowAll] = useState(false)

    const products = [
        { name: 'Syltherine', description: 'Stylish cafe chair', price: 'Rp 2.500.000', sale: 'Rp 3.500.000', image: cafeChair1 },
        { name: 'Leviosa', description: 'Stylish cafe chair', price: 'Rp 2.500.000', image: cafeChair2 },
        { name: 'Lolito', description: 'Luxury big sofa', price: 'Rp 7.000.000', sale: 'Rp 7.000.000', image: bigSofa },
        { name: 'Respira', description: 'Outdoor bar table and stool', price: 'Rp 500.000', image: outdoorTable },
        { name: 'Grifo', description: 'Night lamp', price: 'Rp 1.500.000', image: lamp },
        { name: 'Muggo', description: 'Small mug', price: 'Rp 150.000', image: mug },
        { name: 'Pingky', description: 'Cute bed set', price: 'Rp 7.000.000', sale: 'Rp 14.000.000', image: bed },
        { name: 'Potty', description: 'Minimalist flower pot', price: 'Rp 500.000', image: pot },
        { name: 'Syltherine', description: 'Postmodern glass pot', price: 'Rp 4.000.000', sale: 'Rp 3.500.000', image: furniture10 },
        { name: 'Leviosa', description: 'Stylish tv table', price: 'Rp 1.500.000', image: furniture11 },
        { name: 'Lolito', description: 'Bedroom chair', price: 'Rp 700.000', sale: 'Rp 7.000.000', image: furniture12 },
        { name: 'Respira', description: 'Bar table and stool', price: 'Rp 2.500.000', image: furniture13 },
        { name: 'Grifo', description: 'Stylish Cafe table', price: 'Rp 1.000.000', image: furniture14 },
        { name: 'Muggo', description: 'Outdoor table and chair', price: 'Rp 4.550.000', image: furniture15 },
        { name: 'Pingky', description: 'Minimalist Kitchen table', price: 'Rp 6.000.000', sale: 'Rp 10.000.000', image: furniture16 },
        { name: 'Potty', description: 'Classic Wooden Library', price: 'Rp 8.000.000', image: furniture17 },
    ];

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
