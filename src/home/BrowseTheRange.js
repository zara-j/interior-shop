import dining from '../assets/dining.png'
import bedroom from '../assets/bedroom.png'
import living from '../assets/living.png'
const BrowseTheRange = (
) => {

    return (
        <div className="bg-light text-center p-5 sm:mx7">
            <div>
                <h1 className="bg-light font-bold text-4.5xl pt-3">Browse The Range</h1>
                <h2 className="text-dark text-2xl/loose text-muted pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            </div>
            <div className="justify-center text-center font-bold text-3xl mt-4 p-3 mx-3 flex flex-row mb-4">
                <div className="sm:w-[450px] sm:h-[610px] md:mb-4 md:w-[450px] md:h-[610px]">
                    <img src={dining} alt="dining" className="p-2 w-full h-full object-cover" />
                    <div className="text-center p-2 pt-4">Dining</div>
                </div>
                <div className="sm:w-[450px] sm:h-[610px] md:mb-4 md:w-[450px] md:h-[610px]">
                    <img src={living} alt="living1" className="p-2 px-3 w-full h-full object-cover" />
                    <div className="text-center p-2 pt-4">Living</div>
                </div>
                <div className="sm:w-[450px] sm:h-[610px] md:mb-4 md:w-[450px] md:h-[610px]">
                    <img src={bedroom} alt="bedroom" className="p-2 w-full h-full object-cover" />
                    <div className="text-center p-2 pt-4">Bedroom</div>
                </div>
            </div>
        </div>
    )
};

export default BrowseTheRange;
