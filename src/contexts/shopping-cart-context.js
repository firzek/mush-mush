import { createContext, useReducer, useEffect} from 'react'

export const ShoppingCartContext = createContext()

const reducer=(state,action)=>{
  switch (action.type) {
    case 'add':
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: action.payload,
        },
        total: state.total + action.payload.quantity * action.payload.price,
      };
    case 'remove':
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: {},
        },
      };
    case 'increment':
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: {
            ...state.items[action.payload.id],
            quantity: state.items[action.payload.id].quantity + action.payload.quantity,
          },
        },
        total: state.total + action.payload.quantity * state.items[action.payload.id].price,
      };
    default:
      return state;
  }

};

export function ShoppingCartProvider({ children }) {


  const initialState=JSON.parse(localStorage.getItem('myCart') || '{"items":{},"total":0}')


  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem('myCart', JSON.stringify(state));
  }, [state]);


  return (
    <ShoppingCartContext.Provider
      value={{
        dispatch,
        state
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
