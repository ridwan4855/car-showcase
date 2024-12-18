import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  const headers = {
    "X-RapidAPI-Key": "d3596157d4msh38fe5ad69e05cb6p195d8cjsn60ec62953444",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    { headers: headers }
  );

  const result = await response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;

  const mileageFactor = 0.1;

  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;

  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, year, model } = car;

  url.searchParams.append("customer", "hrjavascript-mastery"); // this is the code that have to be update if you want this to be work
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
};

export const listCars =[
  {
    "merk" : "Avanza", 
    "year":"2024", 
    "unit":"270", 
    "countSell" : "3",
    "from":"Japan",
    "linkImage" : "/icon/car-logo.svg" ,
    "varianColor" : [
      {"blue" : "#0000FF"},
      {"green" : "#00A36C"},
      {"red" : "#A52A2A"},
      {"black" : "#36454F"}
    ]
  },
  {
    "merk" : "Avanza 2", 
    "year":"2024", 
    "unit":"210", 
    "countSell" : "5",
    "from":"Japan",
    "linkImage" : "/icon/car-logo.svg" ,
    "varianColor" : [
      {"blue" : "#0000FF"},
      {"green" : "#00A36C"},
      {"red" : "#A52A2A"},
      {"black" : "#36454F"}
    ]
  },
  {
    "merk" : "Avanza 3", 
    "year":"2024", 
    "unit":"2", 
    "countSell" : "240",
    "from":"Japan",
    "linkImage" : "/icon/car-logo.svg" ,
    "varianColor" : [
      {"blue" : "#0000FF"},
      {"green" : "#00A36C"},
      {"red" : "#A52A2A"},
      {"black" : "#36454F"}
    ]
  },
  {
    "merk" : "Avanza 4", 
    "year":"2024", 
    "unit":"43", 
    "countSell" : "230",
    "from":"Japan",
    "linkImage" : "/icon/car-logo.svg" ,
    "varianColor" : [
      {"blue" : "#0000FF"},
      {"green" : "#00A36C"},
      {"red" : "#A52A2A"},
      {"black" : "#36454F"}
    ]
  },
  {
    "merk" : "Avanza 5", 
    "year":"2024", 
    "unit":"3", 
    "countSell" : "80",
    "from":"Japan",
    "linkImage" : "/icon/car-logo.svg" ,
    "varianColor" : [
      {"blue" : "#0000FF"},
      {"green" : "#00A36C"},
      {"red" : "#A52A2A"},
      {"black" : "#36454F"}
    ]
  },
  {
    "merk" : "Avanza 6", 
    "year":"2024", 
    "unit":"0", 
    "countSell" : "120",
    "from":"Japan",
    "linkImage" : "/icon/car-logo.svg" ,
    "varianColor" : [
      {"blue" : "#0000FF"},
      {"green" : "#00A36C"},
      {"red" : "#A52A2A"},
      {"black" : "#36454F"}
    ]
  },
  {
    "merk" : "Avanza 7", 
    "year":"2024", 
    "unit":"0", 
    "countSell" : "23",
    "from":"Japan",
    "linkImage" : "/icon/car-logo.svg" ,
    "varianColor" : [
      {"blue" : "#0000FF"},
      {"green" : "#00A36C"},
      {"red" : "#A52A2A"},
      {"black" : "#36454F"}
    ]
  },
  {
    "merk" : "Avanza 8", 
    "year":"2024", 
    "unit":"100", 
    "countSell" : "20",
    "from":"Japan",
    "linkImage" : "/icon/car-logo.svg" ,
    "varianColor" : [
      {"blue" : "#0000FF"},
      {"green" : "#00A36C"},
      {"red" : "#A52A2A"},
      {"black" : "#36454F"}
    ]
  }
]
;