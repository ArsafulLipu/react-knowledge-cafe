import {useEffect, useState} from "react";
import Blog from "../Blog/Blog";
const Blogs = ({handerBookmarks, handelReadingtime}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
       
    },[])
    return (
        <div className='w-2/3'>
            <h1>Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handerBookmarks={handerBookmarks} handelReadingtime={handelReadingtime}></Blog>)
            }
        </div>
    );
};

export default Blogs;