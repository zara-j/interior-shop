import { IoSearch } from "react-icons/io5";
import RecentPosts from "./RecentPosts";

const Article = (
) => {
    return (
        <div className="lg:w-1/4 flex-col p-3">
            <div className="relative flex items-center justify-end">
                <input type="search" className="border border-black px-12 py-3 rounded-xl" />
                <IoSearch className="text-3xl absolute mr-2" />
            </div>
            <div className="flex flex-col py-4 mt-4">
                <div className="text-2xl font-bold">Categories</div>
                <div className="flex justify-between text-gray-400 text-lg pt-5">
                    <span className="">Crafts</span>
                    <span className="">2</span>
                </div>
                <div className="flex justify-between text-gray-400 text-lg pt-5">
                    <span className="">Design</span>
                    <span className="">8</span>
                </div>
                <div className="flex justify-between text-gray-400 text-lg pt-5">
                    <span className="">Handmade</span>
                    <span className="">2</span>
                </div>
                <div className="flex justify-between text-gray-400 text-lg pt-5">
                    <span className="">Interior</span>
                    <span className="">1</span>
                </div>
                <div className="flex justify-between text-gray-400 text-lg pt-5">
                    <span className="">Wood</span>
                    <span className="">6</span>
                </div>
            </div>
            <RecentPosts />
        </div>
    );
};

export default Article;
