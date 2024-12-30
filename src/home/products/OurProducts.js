import ProductCard from "./ProductCard";
import cafeChair1 from '../../assets/cafeChair.jpg';
import cafeChair2 from '../../assets/cafeChair2.jpg';
import bigSofa from '../../assets/bigSofa.jpg';
import outdoorTable from '../../assets/outdoorTable.jpg';
import lamp from '../../assets/lamp.jpg';
import mug from '../../assets/mug.jpg';
import bed from '../../assets/bed.jpg';
import pot from '../../assets/pot.jpg';


const OurProducts = () => {
    const products = [
        { name: 'Syltherine', description: 'Stylish cafe chair', price: 'Rp 2.500.000', sale:'Rp 3.500.000', image: cafeChair1 },
        { name: 'Leviosa', description: 'Stylish cafe chair', price: 'Rp 2.500.000', image: cafeChair2 },
        { name: 'Lolito', description: 'Luxury big sofa', price: 'Rp 7.000.000', sale: 'Rp 7.000.000' ,image: bigSofa },
        { name: 'Respira', description: 'Outdoor bar table and stool', price: 'Rp 500.000', image: outdoorTable },
        { name: 'Grifo', description: 'Night lamp', price: 'Rp 1.500.000', image: lamp },
        { name: 'Muggo', description: 'Small mug', price: 'Rp 150.000', image: mug },
        { name: 'Pingky', description: 'Cute bed set', price: 'Rp 7.000.000', sale: 'Rp 14.000.000',image: bed },
        { name: 'Potty', description: 'Minimalist flower pot', price: 'Rp 500.000', image: pot },
    ];

    return (
        <div className="bg-light flex flex-col items-center py-10">
            <h1 className="text-center font-bold text-5xl mb-8">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-5 mx-5">
                {products.map((product, index) => (
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
        </div>
    );
};

export default OurProducts;