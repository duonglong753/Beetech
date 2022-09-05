import "./navbar.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ChangLanguageButton from "../ChangeLanguageButton/ChangLanguageButton";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

const Navbar = () => {
  const { t } = useTranslation();
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder={t("search")} />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <ChangLanguageButton />
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <Link to="profile" style={{ textDecoration: "none" }}>
            <div className="item">
              <img
                src="http://127.0.0.1:8887/public/images/avatar.jpg"
                alt="avatar"
                className="avatar"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
