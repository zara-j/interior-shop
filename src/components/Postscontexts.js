import { FaUser, FaCalendar, FaTag } from "react-icons/fa";
import { useState } from 'react';
import { loremIpsum } from 'react-lorem-ipsum';

const Postscontexts=({img, alt, topic, tag})=>{

    const [isExpanded, setIsExpanded] = useState(false);
    const loremText = loremIpsum({ count: 5 }); // Generates 5 paragraphs

    const fullText = loremText.join(' ');
    const previewText = loremText[0];

    return(
        <div className="p-3 xl-p1">
             <img src={img} alt={alt} className="xl:max-w-[800px] xl:max-h-[600px] lg:max-w-[600px] lg:max-h-[400px] rounded-lg" />
                <div className="flex flex-row items-center lg:text-lg text-gray-400 py-3">
                    <FaUser /><div className="ml-1 mr-6">Admin</div>
                    <FaCalendar /><div className="ml-1 mr-6">14 Oct 2024</div>
                    <FaTag /><div className="ml-1 mr-6">{tag}</div>

                </div>
                <div>
                    <div className="text-3xl font-bold pt-2">{topic}</div>
                    <p className="lg:max-w-[800px] py-3 text-gray-400 text-justify">
                        {isExpanded ? fullText : previewText}
                    </p>
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className=" border-b border-separate border-black text-lg mb-5"
                    >
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                </div>
        </div>
    )
};
export default Postscontexts