import './ingredient.css'
const Ingredient = (props) => {
  return (
    <div className='ingContainer'>
      <div className='divImg'>
        <img className='myImge'
          src={props.image}
          alt="foodImage"
        />
      </div>
      <div className='text'>
        <p>{props.text} </p>
      </div>
    </div>
  );
};

export default Ingredient;