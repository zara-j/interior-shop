import MyHeader from "../components/header/MyHeader"
import Categories from "./Categories"
import TitlePic from "./TitlePic"



const Home = () => {

    return (
        <div className="bg-dark min-h-screen">
          <div className="max-w-[1600px] mx-auto">
                <MyHeader />
                <TitlePic />
                <Categories />
            </div>
        </div>
    )
}
export default Home