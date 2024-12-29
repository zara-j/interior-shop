import dining from '../assets/dining.png'
import bedroom from '../assets/bedroom.png'
import living from '../assets/living.png'

const BrowseTheRange = () => {

    return (
        <div  className="bg-light text-center p-5">
            <div>
                <h1 className="bg-light font-bold">Browse The Range</h1>
                <h2 className="text-dark text-xl text-muted px-6"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            </div>
            <div className="justify-center text-center font-bold text-2xl mt-4 p-3 mx-3 flex flex-row">
                <div><img src={dining} alt="dining" className="p-2 mb-4 w-[410px] h-[600px]"/>Dining</div>
                <div><img src={living} alt="living1" className="p-2 mx-2 mb-4 w-[410px] h-[600px]"/>Living</div>
                <div><img src={bedroom} alt="bedroom" className="p-2 mb-4 w-[410px] h-[600px]"/>Bedroom</div>
            </div>
        </div>
    )
};
export default BrowseTheRange