import { useStoreContext } from '../../utils/context/GlobalState'
const Ingredient = (props) => {
  const [state, dispatch] = useStoreContext();
  // console.log(state)
  // <h4>Ingredient</h4>
  // props.hit.recipe.ingredients.map((ingredient) => (
  //   <Ingredient {...ingredient} key={uuid()} />
  // ))} 
    return (
      <div
        style={{
          display: "fex",
          flexWrap: "wrap",
          border: "1px solid black",
          borderRadius: "1rem",
          marginBottom: ".5rem",
          padding: ".5rem",
          float: "left",
          justifyContent: "space-between",
          width: "100%",
          backgroundImage: "linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            float: "left",
            borderRight: "1rem",
            width: "30%",
          }}
        >
          <img
            style={{
              maxWidth: "80px",
              maxHeight: "80px",
              borderRadius: "50%",
              borderRight: "1rem",
            }}
            src={props.image}
            alt=""
          />
        </div>
        <div
          style={{
            width: "60%",
            float: "right",
            backgroundColor: "#ffffff",
            padding: ".5rem",
            borderRadius: "1rem",
          }}
        >
          
          {" "}
          <p>{props.text} </p>
        </div>
      </div>
    );
  };
  
  export default Ingredient;