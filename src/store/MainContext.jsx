import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";

const MainProvider = createContext();

const initialState = {
  content: [],
  cart: [],
  filter: "",
  isCartOpen: false,
};

function MainContext({ children }) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "content":
        return {
          ...state,
          content: action.payload,
        };

      case "content/filter":
        return {
          ...state,
          filter: action.payload,
        };

      case "cart/add":
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };

      case "cart/del":
        const product = action.payload;
        const delProduct = state.cart.filter((a, index) => {
          if (index !== product) {
            return a;
          }
        });

        return {
          ...state,
          cart: delProduct,
        };

      case "cart/status":
        return {
          ...state,
          isCartOpen: action.payload,
        };
    }
  };

  const [{ content, cart, isCartOpen, filter }, dispatch] = useReducer(
    reducer,
    initialState
  );

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
        isCartOpen,
        filter,
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
