const ProductCard = ({ image, name, description, price, sale }) => {
    return (
        <div className="card w-full sm:max-w-">
            <img className="w-full object-cover object-center" src={image} alt={name} />
            <div className="p-3">
            <h1 className="font-bold text-2xl">{name}</h1>
            <h2 className="text-muted text-lg">{description}</h2>
            <h1 className="font-bold text-2xl">{price}
                <p className="text-muted text-lg font-normal line-through float-right mr-8">{sale}</p>
            </h1>
            
            </div>
        </div>
    );
};

export default ProductCard