"use client";

import { CustomFilter, Hero, SearchBar, CarCard } from "@/components";

import { fetchCars } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants";
import { ShowMore } from "@/components/ShowMore";

import { useEffect, useState } from "react";
import { HomeProps } from "@/types";

// server side rendering, there is a bug thatt happend when i update the serachparams

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  // export default function Home() {
  //   const [allCars, setAllCars] = useState([]);
  //   const [loading, setLoading] = useState(false);

  //   // search states
  //   const [manufacturer, setManufacturer] = useState("");
  //   const [model, setModel] = useState("");

  //   // filter states
  //   const [fuel, setFuel] = useState("");
  //   const [year, setYear] = useState(2022);

  //   // pagination states
  //   const [limit, setLimit] = useState(10);

  //   const getCars = async () => {
  //     try {
  //       const result = await fetchCars({
  //         manufacturer: manufacturer || "",
  //         year: year || 2022,
  //         fuel: fuel || "",
  //         limit: limit || 10,
  //         model: model || "",
  //       });

  //       setAllCars(result);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   useEffect(() => {
  //     getCars();
  //   }, [fuel, year, limit, manufacturer, model]);

  return (
    <main className="overflow-hidden">
      <Hero />
      <div
        className="mt-12 padding-x padding-y 
      max-width"
        id="discover"
      >
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-x1">Oops, no result</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
