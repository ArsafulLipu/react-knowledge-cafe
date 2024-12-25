import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import {useState} from "react"

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingtime, setReadingtime] = useState(0)
  const handerBookmarks = blog =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);

  }
  const handelReadingtime = (id, time) =>{
    const newtime = readingtime + time;
    setReadingtime(newtime)
    const remaningBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remaningBookmarks);
  }

  return (
    <>
      <Header></Header>
      <div className="flex m-12" >
      <Blogs handerBookmarks={handerBookmarks} handelReadingtime={handelReadingtime}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingtime={readingtime} ></Bookmarks>
      </div>
    </>
  )
}

export default App
