import inspire0 from '../assets/inspire0.jpg';
import inspire1 from '../assets/inspire1.jpg';
import inspire2 from '../assets/inspire2.jpg';
import inspire3 from '../assets/inspire3.jpg';

const Inspiration = () => {
    const images = [inspire0, inspire1, inspire2, inspire3];

    return (
        <div className="bg-light py-20">
            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start px-5">
                <div className="lg:text-left p-5 lg:w-[40%]">
                    <h1 className="text-5xl text-gray-700 font-bold lg:text-left">
                        50+ Beautiful rooms inspiration
                    </h1>
                    <p className="text-lg font-semibold text-muted my-6 lg:text-left">
                        Our designer already made a lot of beautiful room prototypes to inspire you.
                    </p>
                    <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold text-lg px-8 py-3">
                        Explore More
                    </button>
                </div>

                <div className="overflow-x-scroll scroll-smooth w-full lg:w-[60%]">
                    <div className="flex space-x-6">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`inspiration-${index}`}
                                className="min-w-[600px] lg:min-w-[400px] h-[450px] object-cover shadow-lg"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inspiration;
