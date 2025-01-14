import post1 from '../../assets/post1.jpg';
import post2 from '../../assets/post2.jpg';
import post3 from '../../assets/post3.jpg';
import Article from './Article';
import Postscontexts from '../../components/Postscontexts';
import Pagination from '../../components/Pagination';

const Posts = () => {
    const posts = [
        {
            id: 'post1',
            title: 'Going all-in with millennial design',
            tag: 'Wood',
            image: post1,
        },
        {
            id: 'post2',
            title: 'Exploring new ways of decorating',
            tag: 'Handmade',
            image: post2,
        },
        {
            id: 'post3',
            title: 'Handmade pieces that took time to make',
            tag: 'Wood',
            image: post3,
        },
    ]
    return (
        <div className="container flex flex-col xl:flex-row justify-between py-6 xl:py-24">
            <div className="lg:w-2/3 w-full">
            <div>
                {posts.map((post)=>(
                <Postscontexts 
                key={post.id}
                img={post.image}
                alt={post.title}
                topic={post.title}
                tag={post.tag}
                />
            ))}
            </div>
            <Pagination items={posts} itemsPerPage={3} />
            </div>
            <Article />
        </div>
    );
};

export default Posts;
