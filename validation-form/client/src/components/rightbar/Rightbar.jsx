import "./rightbar.scss";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Ho Chi Minh city</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Viet Nam</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="http://127.0.0.1:8887/public/images/LTH.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Le Thanh Huy</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">
              Nguyen Tran Trung Kien{" "}
            </span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="http://127.0.0.1:8887/public/images/DDT.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Do Duc Thanh</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="http://127.0.0.1:8887/public/images/NQT.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Nguyen Quoc Tuan</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="http://127.0.0.1:8887/public/images/TMA.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Tran Minh Anh</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="http://127.0.0.1:8887/public/images/PTP.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Phung Tan Phuong</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
