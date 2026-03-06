import Navbar from './component/Navbar/Navbar'
import Blogs from './component/Blogs/Blogs'

function App() {
 

  return (
    <>
    <Navbar></Navbar>
    
    <div className="main-container flex text-center p-10">
        <div className="left-container w-[70%]">
          <h2>left container </h2>
          <Blogs></Blogs>

        </div>
        <div className="right-container w-[30%]">
          <h2>right container</h2>
          <h3>Reading count : </h3>
          <h3>Bookmarked count : </h3>

        </div>
    </div>
    
  
    </>
  )
}

export default App
