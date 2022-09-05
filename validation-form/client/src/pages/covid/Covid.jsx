import CountrySelector from "../../components/CountrySelector";
import Highlight from "../../components/Highlight";
import Summary from "../../components/Summary";
import { useEffect, useState } from "react";
import { getCountries, getReportByCountry } from "../../APIs";
import { sortBy } from "lodash";
import { Typography } from "@material-ui/core";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import moment from "moment";
import "./covid.scss";
import { useTranslation } from "react-i18next";

function Covid() {
  const [countries, setCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("vn");
  const [reports, setReport] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    getCountries().then((res) => {
      const countries = sortBy(res.data, "Country");
      setCountry(countries);
    });
  }, []);

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  useEffect(() => {
    const country = countries.find(
      (country) => country.ISO2.toLowerCase() === selectedCountry
    );
    const { Slug } = country ? country : "";

    Slug &&
      getReportByCountry(Slug).then((res) => {
        console.log(res);
        res.data.pop();
        setReport(res.data);
      });
  }, [selectedCountry, countries]);

  return (
    <div className="covid">
      <Sidebar />

      <div className="covidContainer">
        <Navbar />
        <div className="content">
          <Typography variant="h2" component="h2">
            <img
              src="http://127.0.0.1:8887/public/images/covid.png"
              alt="covid"
              className="covid w-auto mr-3 h-12"
            />
            {t("Covid Tracker")}
          </Typography>
          <Typography component="p">{moment().format("LLL")}</Typography>
          <CountrySelector
            countries={countries}
            handleChange={handleChange}
            value={selectedCountry}
          />
          <Highlight report={reports} />
          <Summary report={reports} selectedCountry={selectedCountry} />
        </div>
      </div>
    </div>
  );
}

export default Covid;
