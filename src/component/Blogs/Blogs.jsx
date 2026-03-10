import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({clickBookmark}) => {
  const [blogs, setblog] = useState([]);

  useEffect(() => {
    fetch("/public/fakeData.json").
      then(res => res.json())
      .then(data => setblog(data));

  }, [])

  // console.log(blogs);
  return (
    <div >
      <h1 className='bg-blue-950 text-amber-100 p-2  border-blue-950 rounded-xl m-2'>Total Blogs : {blogs.length}</h1>
      <div className='grid grid-cols-3'>
       {
        blogs.map(blog=>< Blog key={blog.id} clickBookmark={()=>clickBookmark(blog)} blog={blog}></Blog>)
       }
        
      </div>

    </div>
  );
};

export default Blogs;