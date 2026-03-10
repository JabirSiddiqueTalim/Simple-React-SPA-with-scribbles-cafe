import Navbar from './component/Navbar/Navbar'
import Blogs from './component/Blogs/Blogs'
import { useState } from 'react'

function App() {
  const [bookMarked,setbookMarked]=useState([])
  const clickBookmark=(blog)=>{
    if(!bookMarked.includes(blog))
    {
      setbookMarked([...bookMarked,blog]);

    }else
    {
      const netbookmarked=bookMarked.filter(book=>book!=blog);
      setbookMarked([...netbookmarked])

    }
    
    // console.log(bookMarked);

    
  }
 

  return (
    <>
    <Navbar></Navbar>
    
    <div className="main-container flex text-center p-10">
        <div className="left-container w-[70%]">
          <h2>left container </h2>
          <Blogs clickBookmark={clickBookmark}></Blogs>
          
        </div>
        <div className="right-container w-[30%]">
          <h2>right container</h2>
          <h3>Reading count : </h3>
          <h3>Bookmarked count :{bookMarked.length} </h3>
          {
            bookMarked.map((bookMark)=><p className='bg-red-950 text-white'>{bookMark.name}</p>)
          }

        </div>
    </div>
    
  
    </>
  )
}

export default App
