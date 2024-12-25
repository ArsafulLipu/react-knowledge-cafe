import { FaBeer } from 'react-icons/fa';
const Blog = ({blog, handerBookmarks, handelReadingtime}) => {
    const {id, title, cover, reading_time, author, author_img, posted_date, hashtags} = blog;
    return (
        <div className="space-y-4">
            <img src={cover} alt="" />
            <div className="flex justify-between ">
                <div className="flex">
                    <img className="w-14" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handerBookmarks(blog)}>
                    <FaBeer></FaBeer>

                    </button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((ls, idx) => <span key={idx}><a href="">#{ls}</a></span>)
                }
            </p>
            <button className="text-purple-900 underline mb-4 pb-4 font-bold" onClick={()=> handelReadingtime(id, reading_time)}>Mark as Read</button>
        </div>
    );
};


export default Blog;