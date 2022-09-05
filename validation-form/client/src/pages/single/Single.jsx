import "./single.scss";
import { useTranslation } from "react-i18next";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  const { t } = useTranslation();
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">{t("Edit")}</div>
            <h1 className="title">{t("Informations")}</h1>
            <div className="item">
              <img
                src="http://127.0.0.1:8887/public/images/avatar.jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Duong Hung Long</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">duonglong753@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">{t("Phone")}:</span>
                  <span className="itemValue">0932749306</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">{t("Address")}:</span>
                  <span className="itemValue">
                    262/1/61 Phan Anh street, Tan Phu District, HCM city
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">{t("Country")}:</span>
                  <span className="itemValue">Vietnam</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">{t("Last Transactions")}</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
