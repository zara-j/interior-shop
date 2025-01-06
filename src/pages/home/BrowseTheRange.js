import dining from '../../assets/dining.png'
import bedroom from '../../assets/bedroom.png'
import living from '../../assets/living.png'
const BrowseTheRange = (
) => {

    return (
        <div className="bg-white text-center p-5 sm:mx7">
            <div>
                <h1 className="bg-white font-bold text-4.5xl pt-3">Browse The Range</h1>
                <h2 className="text-dark text-2xl font-normal text-muted pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 lg:mx-14">
                <div className="w-full">
                    <img src={dining} alt="dining" className="w-full h-[510px] object-cover" />
                    <div className="text-center p-2 pt-4 text-2xl font-bold">Dining</div>
                </div>
                <div className="w-full">
                    <img src={living} alt="living" className="w-full h-[510px] object-cover" />
                    <div className="text-center p-2 pt-4 text-2xl font-bold">Living</div>
                </div>
                <div className="w-full">
                    <img src={bedroom} alt="bedroom" className="w-full h-[510px] object-cover" />
                    <div className="text-center p-2 pt-4 text-2xl font-bold">Bedroom</div>
                </div>
            </div>
        </div>
    )
};

export default BrowseTheRange;
