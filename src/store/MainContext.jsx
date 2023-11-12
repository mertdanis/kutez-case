import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";

const MainProvider = createContext();

const initialState = {
  content: [],
  cart: [],
};

function MainContext({ children }) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "content":
        return {
          ...state,
          content: action.payload,
        };
    }
  };

  const [{ content, cart }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/public/data/products.json");
      dispatch({
        type: "content",
        payload: res.data,
      });
    };

    fetchData();
  }, []);

  return (
    <MainProvider.Provider
      value={{
        content,
        cart,
        dispatch,
      }}
    >
      {children}
    </MainProvider.Provider>
  );
}

const useData = () => {
  const context = useContext(MainProvider);
  return context;
};

export { MainContext, useData };
