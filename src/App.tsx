import React, { useState } from "react";
import { Alldata } from "./AllData";
const App = () => {
  const [country, setCountry] = useState<string>("");
  const [city, setCity] = useState<string>("");

  const handleCountry = (event: any) => {
    setCountry(event.target.value);
  };
  const handleCity = (e:any) => {
    setCity(e.target.value);
  };
  // console.log(country);
  // console.log(city);

  const FilteredCities = country
    ? Alldata.find((cty) => cty.name === country)?.cities
    : [];
  console.log(FilteredCities);

  return (
    <>
      <div class="main">
        <div class="container">
          <h1 class="droptitle">Dropdown</h1>
          <div class="inputField">
            <select value={country} onChange={handleCountry}>
              <option value="">Select Country</option>
              {Alldata.map((data:any) => (
                <>
                  <option value={data.name}>{data.name as string}</option>
                </>
              ))}
            </select>
            <select value={city} onChange={handleCity} disabled={!country}>
              <option value="">Select City</option>
              {FilteredCities?.map((data:any) => (
                <>
                  <option value={data}>{data}</option>
                </>
              ))}
            </select>
            {/* <input type="text" placeholder="Country" />
            <input type="text" placeholder="City" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
