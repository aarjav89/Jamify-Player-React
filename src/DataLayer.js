import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext= createContext(); // prepare the data layer

export const DataLayer = ({ initialState, reducer, children }) => (
     <DataLayerContext.Provider value={useReducer( reducer, initialState)}>
         {children}
     </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);
// if i want to get any value from data layer, we have to export it as above
