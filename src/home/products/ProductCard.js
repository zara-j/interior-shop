const ProductCard = ({ image, name, description, price, sale }) => {
    return (
        <div className="w-full sm:max-w-sm bg-indigo-50">
            <img className="w-full h-[250px] object-cover object-center" src={image} alt={name} />
            <div className="p-3">
                <h1 className="font-bold text-xl">{name}</h1>
                <h2 className="text-muted text-base">{description}</h2>
                <h1 className="font-bold text-2xl">{price}
                    {sale && (
                        <p className="text-muted text-lg font-normal line-through float-right">{sale}</p>
                    )}
                </h1>
            </div>
        </div>

    );
};

export default ProductCard