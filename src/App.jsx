import Navbar from './component/Navbar/Navbar'
import Blogs from './component/Blogs/Blogs'
import { useState } from 'react'
import { ImGift } from 'react-icons/im'
import Footer from './component/Footer/Footer'

function App() {
  const [bookMarked, setbookMarked] = useState([])
  const clickBookmark = (blog) => {
    if (!bookMarked.includes(blog)) {
      setbookMarked([...bookMarked, blog]);

    } else {
      const netbookmarked = bookMarked.filter(book => book != blog);
      setbookMarked([...netbookmarked])

    }

    // console.log(bookMarked);


  }


  return (
    <>
      <Navbar></Navbar>

      <div className="main-container flex text-center p-10">
        <div className="left-container w-[70%]">

          <Blogs clickBookmark={clickBookmark}></Blogs>

        </div>
        <div className="right-container w-[30%]">
          <h3 className='bg-blue-950 text-amber-100 p-2 border-blue-950 rounded-xl m-2'>Bookmarked count :{bookMarked.length} </h3>

          <div>
            {
              bookMarked.map((bookMark) => (
                <div key={bookMark.id} className="mb-4 p-2 border rounded-lg shadow-sm flex justify-between pl-5 pr-5">
                  <img
                    src={bookMark.image}
                    alt={bookMark.name}
                    className="w-30 h-20 object-cover rounded-md mb-2"
                  />
                  <button className="btn">
                    Like
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                  </button>
                  <div className='text-xl text-blue-800' >
                    <p >
                      Bottle Name : {bookMark.name}
                    </p>
                    <p >
                      Bottle Brand : {bookMark.brand}
                    </p>
                    <p >
                      Bottle Price : {bookMark.price}
                    </p>
                  </div>

                </div>
              ))
            }
          </div>


        </div>
      </div>
      <Footer></Footer>


    </>
  )
}

export default App
