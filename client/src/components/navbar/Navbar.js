import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">International Ingredients to Wordly Meals</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/recipe">Recipe</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/item">Item</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ingredient">Ingredient</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/digest">Digest</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/foodDatabase">FoodDatabase</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar




// const Navbar = () => {
//     return (
//         <div style={{border: '1px solid lightgray', width:'100vw',height:'70px', backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)'}}>
//             <ul style={ { display:'flex',flexDirection: 'row', justifyContent: 'space-around'} }>
//                 <li style={{textDecoration:'none'}}>
//                     <a href="/">Home</a>
//                 </li >
//                 <li style={{textDecoration:'none'}}>
//                     <a href="/signup">Signup</a>
//                 </li >
//                 <li style={{textDecoration:'none'}}>
//                     <a href="/login">login</a>
//                 </li >
//                 <li style={{textDecoration:'none'}}>
//                     <a href="/recipe">Recipe</a>
//                 </li >
//                 <li style={{textDecoration:'none'}}>
//                     <a href="/item">Item</a>
//                 </li >
//                 <li style={{textDecoration:'none'}}>
//                     <a href="/ingredient">Ingredient</a>
//                 </li >
//                 <li style={{textDecoration:'none'}}>
//                     <a href="/digest">Digest</a>
//                 </li >
//                 <li style={{textDecoration:'none'}}>
//                     <a href="/foodDatabase">FoodDatabase</a>
//                 </li >

//             </ul>
//         </div>
//     )
// }

// export default NavBar
