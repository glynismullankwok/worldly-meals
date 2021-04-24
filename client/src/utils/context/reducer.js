import { ADD_RECIPE, SHOW_DETAIL, HIDE_DETAIL, REMOVE_RECIPE, NEW_ORDER, PICKUP_ORDER, USER_LOGIN, LOGOUT_USER } from "./action";

const reducer = (state, action) => {
  switch (action.type) {
    
    case USER_LOGIN:
      return {
        ...state, userLogin: action.payload
      }
      case LOGOUT_USER:
        return {
          ...state, userLogin: ''
        }
    case ADD_RECIPE:
      return {
        ...state, recipe: [action.payload, ...state.recipe]
      }
    case NEW_ORDER:
      return {
        ...state, orders: [action.payload, ...state.orders]
      }
    case PICKUP_ORDER:
      return {
        ...state, orders: [state.orders[0].filter(order => order.id !== action.payload)]
        // ...state, orders: [action.payload]

      }

    case REMOVE_RECIPE:
      return {
        ...state, recipe: [state.recipe[0].filter(item => item.id !== action.payload)]
      }

    case SHOW_DETAIL:
      return {
        ...state, showDetail: true, detail: state.recipe[0].map(Item => Item.id === action.payload)
      }
    case HIDE_DETAIL:
      return {
        ...state, detail: false
      }

    default: return state;
  }

};

export default reducer;

