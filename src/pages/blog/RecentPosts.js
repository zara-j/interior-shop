import rec1 from '../../assets/rec1.jpg'
import rec2 from '../../assets/rec2.jpg'
import rec3 from '../../assets/rec3.jpg'
import rec4 from '../../assets/rec4.jpg'
import rec5 from '../../assets/rec5.jpg'

const RecentPosts = () => {
    return (
        <div className="py-24 text-wrap">
            <div className="text-3xl font-bold">Recent Posts</div>
            <div className="flex flex-row py-3 items-center">
                <img src={rec1} className="max-w-24 max-h-24 object-cover object-center rounded-xl mr-3" />
                <div>
                    <div className="text-base mb-1 font-medium">Going all-in with millenial design</div>
                    <div className="text-sm text-gray-400">03 Aug 2022</div>
                </div>
            </div>
            <div className="flex flex-row py-3 items-center">
                <img src={rec2} className="max-w-24 max-h-24 object-cover object-center rounded-xl mr-3" />
                <div>
                    <div className="text-base mb-1 font-medium">Exploring new ways of decorating</div>
                    <div className="text-sm text-gray-400">03 Aug 2022</div>
                </div>
            </div>
            <div className="flex flex-row py-3 items-center">
                <img src={rec3} className="max-w-24 max-h-24 object-cover object-center rounded-xl mr-3" />
                <div>
                    <div className="text-base mb-1 font-medium">Handmade pieces that took time to make</div>
                    <div className="text-sm text-gray-400">03 Aug 2022</div>
                </div>
            </div>
            <div className="flex flex-row py-3 items-center">
                <img src={rec4} className="max-w-24 max-h-24 object-cover object-center rounded-xl mr-3" />
                <div>
                    <div className="text-base mb-1 font-medium">Modern home in Milan</div>
                    <div className="text-sm text-gray-400">03 Aug 2022</div>
                </div>
            </div>
            <div className="flex flex-row py-3 items-center">
                <img src={rec5} className="max-w-24 max-h-24 object-cover object-center rounded-xl mr-3" />
                <div>
                    <div className="text-base mb-1 font-medium">Colorful office redsign</div>
                    <div className="text-sm text-gray-400">03 Aug 2022</div>
                </div>
            </div>
        </div>
    )
};
export default RecentPosts