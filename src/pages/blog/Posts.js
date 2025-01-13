import post1 from '../../assets/post1.jpg';
import { FaUser, FaCalendar, FaTag } from "react-icons/fa";
import { useState } from 'react';
import { loremIpsum } from 'react-lorem-ipsum';
import Article from './Article';

const Posts = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const loremText = loremIpsum({ count: 5 }); // Generates 5 paragraphs

    const fullText = loremText.join(' '); 
    const previewText = loremText[0]; 

    return (
        <div className="container flex flex-col xl:flex-row justify-between py-24">
            <div className="w-3/4 p-3">
                <div>
                    <img src={post1} className="lg:max-w-[800px] lg:max-h-[600px] rounded-lg" />
                    <div className="flex items-center tex-wrap text-lg text-gray-400 py-3">
                        <FaUser /><div className="ml-1 mr-6">Admin</div>
                        <FaCalendar /><div className="ml-1 mr-6">14 Oct 2024</div>
                        <FaTag /><div className="ml-1 mr-6">Wood</div>
                    </div>
                </div>
                <div>
                    <div className="text-3xl font-bold pt-2">Going all-in with millennial design</div>
                    <p>
                        {isExpanded ? fullText : previewText}
                    </p>
                    <button 
                        onClick={() => setIsExpanded(!isExpanded)} 
                        className=" underline mt-2"
                    >
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            </div>
            <Article />
        </div>
    );
};

export default Posts;
