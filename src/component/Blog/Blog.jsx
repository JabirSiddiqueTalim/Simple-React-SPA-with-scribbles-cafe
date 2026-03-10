import React from 'react';
import './Blog.css';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog,clickBookmark }) => {
  return (
    <div className='card'>
      
      <div className="card bg-base-100 w-96 shadow-sm">
      <h2 className='text-xl'>Blog id :{blog.id} </h2>
        <figure>
       
          <img className='BlogImage'
            src={blog.image}
            alt="Shoes" />
           
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            
            {blog.name}
            <div className="badge badge-secondary">NEW</div>
           <button  onClick={()=>clickBookmark(blog)}> < FaBookmark size={20}/></button>
          </h2> 
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Blog;