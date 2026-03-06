import React, { useEffect, useState } from 'react';

const Blogs = () => {
  const [blog, setblog] = useState([]);

  useEffect(() => {
    fetch("/public/fakeData.json").
      then(res => res.json())
      .then(data => setblog(data));

  }, [])

  console.log(blog);
  return (
    <div>
      <h1>Total Blogs : {blog.length}</h1>

    </div>
  );
};

export default Blogs;