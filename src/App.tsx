import React, { useState } from "react";
// import Location from "./Alldata.tsx"

const App = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const handleCountry = (event: any) => {
    setCountry(event.target.value);
  };
  const handleCity = (e:any) => {
    setCity(e.target.value);
  };
  console.log(country);
  console.log(city);

  const Alldata = [
    {
      id: 1,
      name: "Nepal",
      value: "NP",
      cities: ["Kathmandu", "Pokhara", "Bharatpur"],
    },
    {
      id: 2,
      name: "India",
      value: "IND",
      cities: ["Delhi", "Mumbai", "Banglore"],
    },
    {
      id: 3,
      name: "Pakistan",
      value: "PK",
      cities: ["Islamabad", "Lahore", "Karachi"],
    },
  ];

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
              {Alldata.map((data) => (
                <>
                  <option value={data.name}>{data.name}</option>
                </>
              ))}
            </select>
            <select value={city} onChange={handleCity} disabled={!country}>
              <option value="">Select City</option>
              {FilteredCities?.map((data) => (
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
