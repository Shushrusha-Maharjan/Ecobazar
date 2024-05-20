import React from 'react';

function Filter({ filters, setFilters, applyFilters }) {
  const handleCategoryChange = (event) => {
    setFilters({ ...filters, category: event.target.value });
  };

  const handlePriceChange = (event) => {
    const value = event.target.value.split(',').map(Number);
    setFilters({ ...filters, priceRange: value });
  };

  const handleRatingChange = (event) => {
    setFilters({ ...filters, rating: Number(event.target.value) });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-lg font-semibold mb-4">Filter Options</h3>
      <div className="mb-4">
        <label className="block mb-2">Category</label>
        <select value={filters.category} onChange={handleCategoryChange} className="w-full p-2 border rounded">
          <option value="">All</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Price Range</label>
        <input
          type="range"
          min="0"
          max="100"
          value={filters.priceRange}
          onChange={handlePriceChange}
          className="w-full"
          multiple
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Rating</label>
        <select value={filters.rating} onChange={handleRatingChange} className="w-full p-2 border rounded">
          <option value="0">All</option>
          <option value="1">1 Star & Up</option>
          <option value="2">2 Stars & Up</option>
          <option value="3">3 Stars & Up</option>
          <option value="4">4 Stars & Up</option>
          <option value="5">5 Stars</option>
        </select>
      </div>
      <button onClick={applyFilters} className="w-full bg-blue-500 text-white py-2 rounded">Apply Filters</button>
    </div>
  );
}

export default Filter;
