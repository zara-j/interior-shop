import MyHeader from "../components/header/MyHeader"
import BrowseTheRange from "./BrowseTheRange"
import OurProducts from "./products/OurProducts"
import TitlePic from "./TitlePic"



const Home = () => {

    return (
        <div className="bg-dark min-h-screen overflow-x-hidden">
          <div className="max-w-[1800px] mx-auto">
                <MyHeader />
                <TitlePic />
                <BrowseTheRange />
                <OurProducts />
            </div>
        </div>
    )
}
export default Home