const path = require('path');
const express = require('express');
// const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);
const cors = require('cors')
const mongoose = require('mongoose');
const passport = require('./passport');
const apiRoutes = require('./routes/api-route');
const bodyParser = require('body-parser');
const app = express()
const PORT = process.env.PORT || 5000;
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors)
// session middleware here
//  app.use(
//     session({
//       secret: "fraggle-rock", //pick a random string to make the hash that is generated secure
//       store: new MongoStore({ mongooseConnection: mongoose.connection }),
//       resave: false, //required
//       saveUninitialized: false, //required
//     })
//   );
// passport middleware here
app.use(passport.initialize())
app.use(passport.session())
// Serve up static assets(usually on heroku)
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}
// Define API routes here
app.use(apiRoutes)
// Send every other request to the React app 
// Define any API routes before this runs
app.get('*', (req, res)=> {
    res,sendFile(path.join(__dirname, './client/build/index.html'));
})
const uri = process.env.MONGODB_URL || "mongodb://localhost/nutrints"
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true },() =>{
    console.log('db connected')
})
app.listen(PORT, () =>{
    console.log(`PORT ==> API server now on port ${PORT}! connect`);
})