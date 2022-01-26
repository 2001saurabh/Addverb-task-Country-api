import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "react-spinkit";

function ContriesDetail() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        console.log(res.data);
        setCountry(res.data);
        setIsLoading(false);
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setIsLoading(false);
        setCountry({});
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <h1 className="flex items-center justify-center h-screen text-4xl uppercase tracking-widest text-gray-900 dark:text-white lg:text-7xl font-bold">
          <Spinner name="ball-pulse-sync" />
        </h1>
      ) : (
        <section className="grid grid-cols-1 gap-5 p-20 h-300 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 2xl:container 2xl:mx-auto">
          {country.map((countries, index) => (
            <Link to={`/${countries.name.common}`} key={index}>
              <article className="bg-white rounded shadow p-5  dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 transition-all duration-300">
                <img src={countries.flags.png} class="object-fill h-48 w-96" />

                <h2 className="font-bold text-gray-900 text-2xl mt-3 mb-3 dark:text-white">
                  {countries.name.common}
                </h2>
                <ul>
                  <li className="dark:text-white text-gray-900">
                    Capital: {countries.capital}
                  </li>
                  <li className="dark:text-white text-gray-900">
                    Region: {countries.region}
                  </li>
                  <li className="dark:text-white text-gray-900">
                    Sub-Region: {countries.subregion}
                  </li>
                  <li className="dark:text-white text-gray-900">
                    Population: {countries.population}
                  </li>
                </ul>
              </article>
            </Link>
          ))}
        </section>
      )}
    </>
  );
}

export default ContriesDetail;
