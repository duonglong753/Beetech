import { React, useContext, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { DarkModeContext } from "./context/darkModeContext";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Widget from "./components/widget/Widget";
import Featured from "./components/featured/Featured";
import { useTranslation } from "react-i18next";
import Chart from "./components/chart/Chart";
import Table from "./components/table/Table";
import { Outlet } from "react-router-dom";
import "./style/dark.scss";
import "./App.scss";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { t } = useTranslation();
  return (
    <Suspense fallback="loading">
      <div className={darkMode ? "app dark" : "app"}>
        <div className="home">
          <Sidebar />
          <div className="homeContainer">
            <Navbar />
            <div className="widgets">
              <Widget type="user" />
              <Widget type="order" />
              <Widget type="earning" />
              <Widget type="balance" />
            </div>
            <div className="charts">
              <Featured />
              <Chart title={t("Last 6 Months (Revenue)")} aspect={2 / 1} />
            </div>
            <div className="listContainer">
              <div className="listTitle">{t("oders detail")}</div>
              <Table />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
