import React, { useState } from "react";
import { AllCars } from "../data";
import OptionNavBar from "./OptionNavBar";
import FilterSidebar from "./FilterSidebar";
import FilterCenter from "./FilterCenter";
function Filter({ setLikedProducts, likedProducts, setPayProduct }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedCapacities, setSelectedCapacities] = useState([]);
  const [maxPrice, setMaxPrice] = useState(100);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = AllCars.filter((item) => {
    const numericPrice = parseFloat(item.price.replace("$", "")); // Convert price to number
    return (
      (selectedTypes.length === 0 || selectedTypes.includes(item.type)) &&
      (selectedCapacities.length === 0 ||
        selectedCapacities.includes(item.people)) &&
      numericPrice <= maxPrice
    );
  });
  // Functions to update filters (to pass to child components)
  const handleTypeCheckboxChange = (newTypes) => {
    setSelectedTypes(newTypes);
  };

  const handleCapacityCheckboxChange = (newCapacities) => {
    setSelectedCapacities(newCapacities);
  };

  const handleMaxPriceChange = (newMaxPrice) => {
    setMaxPrice(newMaxPrice);
  };

  return (
    <div>
      <OptionNavBar
        setLikedProducts={setLikedProducts}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className="grid grid-cols-12 gap-0">
        <FilterSidebar
          isOpen={isOpen}
          selectedTypes={selectedTypes}
          selectedCapacities={selectedCapacities}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          onTypeChange={handleTypeCheckboxChange}
          onCapacityChange={handleCapacityCheckboxChange}
          onMaxPriceChange={handleMaxPriceChange}
        />
        <FilterCenter
          isOpen={isOpen}
          searchTerm={searchTerm}
          filteredData={filteredData}
          setPayProduct={setPayProduct}
          likedProducts={likedProducts}
          setLikedProducts={setLikedProducts}
        />
      </div>
    </div>
  );
}

export default Filter;
