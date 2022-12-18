import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config ();

//Variables
const uri = process.env.DB_URI;

//Connection
const db = mongoose.connect (uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then ( (fullfilled) => {
    console.log ( 'Connection to mongoDB established '+fullfilled);
})
.catch ( (err) => {
    console.log ( 'error connecting to mongoDB: ' +err.message );
});

export default db;