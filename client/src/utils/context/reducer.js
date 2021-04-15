import Item from "../../components/member/Item";
import { ADD_POST, LOADING, ADD_RECIPE, SHOW_DITAIL, HIDE_DITAIL, REMOVE_RECIPE } from "./action";
  
  const reducer = (state, action) => {
    switch (action.type) {
    case ADD_POST:
      return {
        ...state, posts: {name: 'Desta'}
    }
      case LOADING:
        return {
          ...state,  posts: {name: 'Negasi'}
        } 
        case ADD_RECIPE:
          return {
            ...state, recipe: [action.payload, ...state.recipe]
          }
          case REMOVE_RECIPE:
            console.log(action.payload)
            return {
              ...state, recipe: [state.recipe.filter(item => item.id !== action.payload)]

            }


          case SHOW_DITAIL:
            console.log('---> ', action.payload)

            return {
              ...state, showDitail:true, ditail:state.recipe[0].map(Item => Item.id === action.payload )
            }
            case HIDE_DITAIL:
              return{
                ...state, ditail: false
              }

       default: return state;
    }
    
  };
   
  export default reducer;







