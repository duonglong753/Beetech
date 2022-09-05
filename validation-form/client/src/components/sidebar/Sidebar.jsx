import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const { t } = useTranslation();
  return (
    <div className="sidebar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="top">
          <img
            src="http://127.0.0.1:8887/public/images/logo.png"
            alt="logo"
            className="logo"
          />
        </div>
      </Link>
      <hr />
      <div className="center">
        <ul>
          <p className="title">{t("home")}</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <p className="title">{t("lists")}</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>{t("users")}</span>
            </li>
          </Link>

          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>{t("products")}</span>
            </li>
          </Link>
          <Link to="/covid" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>{t("Covid Tracker")}</span>
            </li>
          </Link>

          <li>
            <CreditCardIcon className="icon" />
            <span>{t("orders")}</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>{t("delivery")}</span>
          </li>
          <p className="title">{t("useful")}</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>{t("stats")}</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>{t("notifications")}</span>
          </li>

          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>{t("setting")}</span>
          </li>
          <p className="title">{t("user")}</p>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>{t("profile")}</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
