import reducer from './reducer'
import React, { createContext, useReducer, useContext } from "react";
import { SHOW_DITAIL } from './action';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    posts: {},
    recipe:[],
    ditail: [],
    showDitail: false 
    // currentPost: {
    //   _id: 0,
    //   title: "",
    //   body: "",
    //   author: ""
    // },
    // favorites: [],
    // loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
