import profile from "../../assets/images/profile.png"
const Header = () => {
    return (
        <div className="flex mx-2 justify-between p-5 exo-2-font items-center border-b-2">
            <h1 className="text-3xl bold">Knowledge Caffe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;