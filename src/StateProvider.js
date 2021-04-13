import React, { createContext, useContext, useReducer} from "react";

// Preparing Data Layer
// createContext is where datalayer lives
export const StateContext = createContext();

// higher order component takes 3 things
export const StateProvider = ({ reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
    {/* initialState= what the data layer looks like when the app is loaded */}
    {/* reducer= it listens to changes */}
    {/* children refers to <App/> inside index.js. Reducer and InitialState are coming from index.js StateProvider tag*/}
        {children}
    </StateContext.Provider>
);

// This is a hook which allows us to pull information from the data layer.
export const useStateValue= () => useContext(StateContext);