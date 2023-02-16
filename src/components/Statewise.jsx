import React, { useEffect, useState } from "react";
import "./Statewise.css";

const Statewise = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const acres = await res.json();
    setData(acres.statewise);
    console.log(data);
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <h1>COVID CASES</h1>
      <div className="ok">
        <table>
          <tr className="head">
            <th>STATE</th>
            <th>CONFIRMED</th>
            <th>RECOVERED</th>
            <th>DEATHS</th>
            <th>ACTIVE</th>
          </tr>

          {data.map((c, i) => {
            return (
              <>
                <tr key={i}>
                  <td>{c.state}</td>
                  <td>{c.confirmed}</td>
                  <td>{c.recovered}</td>
                  <td>{c.deaths}</td>
                  <td>{c.active}</td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
};
export default Statewise;
