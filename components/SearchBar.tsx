"use client";
import SearchManufacturer from "./SearchManufacturer";

import { useState } from "react";
const SeaarchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufactjurer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SeaarchBar;
