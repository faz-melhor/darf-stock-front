import React, { createContext, useState } from 'react';

const DataContext = createContext();

const DataProvider = props => {
  const [state, setState] = useState({});
  return (
    <DataContext.Provider value={[state, setState]}>
      {props.children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
