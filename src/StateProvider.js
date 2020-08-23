import React, { createContext,useContext,useReducer } from 'react';

export const StateContext = createContext()

// BUILD A PROVIDER its wrap entire app inside and give access to data layer

export const StateProvider = ({reducer,initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
    </StateContext.Provider>
)
//this is how we use it inside of component
export const useStateValue = () => useContext(StateContext)

