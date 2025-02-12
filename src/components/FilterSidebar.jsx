import React from "react";

function FilterSidebar({
  isOpen,
  selectedTypes,
  selectedCapacities,
  maxPrice,
  onTypeChange,
  onCapacityChange,
  onMaxPriceChange,
  setMaxPrice,
}) {
  const types = ["SUV", "Sedan", "Coupe", "Sport", "Hatchback"];
  const capacities = ["2 People", "4 People", "5 People", "6 People"];

  // Handle changes for types
  const handleTypeCheckboxChange = (e) => {
    const type = e.target.value;
    onTypeChange(
      selectedTypes.includes(type)
        ? selectedTypes.filter((t) => t !== type) // Deselect
        : [...selectedTypes, type] // Select
    );
  };

  // Handle changes for capacities
  const handleCapacityCheckboxChange = (e) => {
    const capacity = e.target.value
    console.log(capacity);
    onCapacityChange(
      selectedCapacities.includes(capacity)
        ? selectedCapacities.filter((c) => c !== capacity) // Deselect
        : [...selectedCapacities, capacity] // Select
    );
  };

  // Handle max price change
  const handleMaxPriceChange = (e) => {
    onMaxPriceChange(parseInt(e.target.value));
  };
  return (
    <div
      className={`bg-white h-screen lg:h-full w-screen lg:w-[270px] col-span-3 xl:block px-5 py-4 md:px-8 md:py-6 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex flex-col gap-y-3">
        <h1 className="text-xs text-gray-400">T Y P E</h1>
        {types.map((type) => (
          <label key={type} className="flex gap-x-2 font-semibold">
            <input
              type="checkbox"
              value={type}
              onChange={handleTypeCheckboxChange}
              checked={selectedTypes.includes(type)}
            />
            {type}
          </label>
        ))}
        <h1 className="text-xs text-gray-400 mt-4">C A P A C I T Y</h1>
        {capacities.map((capacity) => (
          <label key={capacity} className="flex gap-x-2 font-semibold">
            <input
              type="checkbox"
              value={capacity}
              onChange={handleCapacityCheckboxChange}
              checked={selectedCapacities.includes(capacity)}
            />
            {capacity}
          </label>
        ))}

        <h1 className="text-xs text-gray-400 mt-4">P R I C E</h1>
        <input
          type="range"
          min="80"
          max="100"
          value={maxPrice}
          onChange={(e) => setMaxPrice(parseInt(e.target.value))}
        />
        <label className="font-semibold">Max Price: ${maxPrice}.00</label>
      </div>
    </div>
  );
}

export default FilterSidebar;
