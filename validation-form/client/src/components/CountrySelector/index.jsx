import { FormControl, InputLabel, NativeSelect } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";
function CountrySelector(props) {
  const { value, handleChange, countries } = props;
  const { t } = useTranslation();
  return (
    <FormControl>
      <InputLabel htmlFor="country-selector" shrink>
        {t("Nationals")}
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={handleChange}
        inputProps={{
          name: "country",
          id: "country-selector",
        }}
      >
        {countries.map((country) => (
          <option value={country.ISO2.toLowerCase()} key={country.Country}>
            {country.Country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}

export default CountrySelector;
