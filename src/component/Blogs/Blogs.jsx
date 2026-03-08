import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
  const [blogs, setblog] = useState([]);

  useEffect(() => {
    fetch("/public/fakeData.json").
      then(res => res.json())
      .then(data => setblog(data));

  }, [])

  console.log(blogs);
  return (
    <div >
      <h1>Total Blogs : {blogs.length}</h1>
      <div className='grid grid-cols-3'>
       {
        blogs.map(blog=>< Blog blog={blog}></Blog>)
       }
        
      </div>

    </div>
  );
};

export default Blogs;