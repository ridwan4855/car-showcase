import { CustomFilter, Hero, SearchBar, CarCard } from "@/components";

import { fetchCars, listCars } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants";
import { ShowMore } from "@/components/ShowMore";
import { useEffect, useState } from "react";
import Image from "next/image";

// server side rendering, there is a bug thatt happend when i update the serachparams

export default async function Home({ searchParams }) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  const isCarsEmpty = !Array.isArray(listCars) || listCars.length < 1 || !listCars;

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

      {!isCarsEmpty ? (
        <div className="p-6 w-[90%] mx-auto bg-[rgb(16,16,16)] flex items-center justify-between">
           {listCars?.map((elm) => (
                <div className="bg-[#89CFF0]">
                  <Image alt={elm.merk} width={200} height={200} src={elm.linkImage} className="relative after:absolute after:w-[20px] after:h-[20px] after:bg-[rgb(20,39,29)] after:blur-md after:bottom-0"/>
                  <div className="flex justify-around">
                    <div>zzzz</div>
                    <div> <button>Show</button></div>
                  </div>
                </div>
              ))}

        </div>
      ) : (
        <div className="container text-[30px]">No Data Found</div>
      )}

      
    </main>
  );
}
