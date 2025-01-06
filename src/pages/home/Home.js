import Footer from "../../components/footer/Footer"
import MyHeader from "../../components/header/MyHeader"
import BrowseTheRange from "../home/BrowseTheRange"
import Furniture from "./../home/Furniture"
import Inspiration from "./../home/Inspiration"
import OurProducts from "./products/OurProducts"
import TitlePic from "./TitlePic"



const Home = () => {

    return (
        <div className="bg-black min-h-screen overflow-x-hidden">
          <div className="max-w-[1600px] mx-auto">
                <MyHeader />
                <TitlePic />
                <BrowseTheRange />
                <OurProducts />
                <Inspiration />
                <Furniture />
                <Footer />
            </div>
        </div>
    )
}
export default Home