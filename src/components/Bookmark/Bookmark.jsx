
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-slate-200 text-center p-4 m-4 rounded-xl ">
            
            <h3 className="text-center">{title}</h3>
        </div>
    );
};

export default Bookmark;