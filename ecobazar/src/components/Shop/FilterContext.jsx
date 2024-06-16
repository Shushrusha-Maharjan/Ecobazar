import React, { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <FilterContext.Provider value={{ isFilterVisible, toggleFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
