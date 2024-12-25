import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,readingtime}) => {
    return (
        <div className="w-1/3 bg-gray-300 ml-8 mt-2 pt-2">
            <div>
                <h3>Reading time: {readingtime}</h3>
            </div>
            <h1 className="text-center">Bookmarked Item: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;