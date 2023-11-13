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

      case "content/filter/clear":
        return {
          ...state,
          filter: "",
        };

      case "cart/add":
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };

      case "cart/clear/all":
        return {
          ...state,
          cart: [],
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
      const res = await fetch("/kutez-case/public/data/products.json")
        .then((res) => res.json())
        .then((data) =>
          dispatch({
            type: "content",
            payload: data,
          })
        );
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
