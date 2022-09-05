import "./profile.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Navbar from "../../components/navbar/Navbar";

export default function Profile() {
  return (
    <>
      <Sidebar />
      {/* <Topbar /> */}
      <div className="profile">
        <div className="profileRight">
          <Navbar />
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="http://127.0.0.1:8887/public/images/coverImg.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="http://127.0.0.1:8887/public/images/avatar.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Duong Hung Long</h4>
              <span className="profileInfoDesc">Hello world!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
