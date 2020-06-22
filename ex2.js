let mongoose = require("mongoose");

//connection
mongoose
.connect("mongodb://localhost:27017/mongo-exercises",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("connected to DB : mongo-exercises"))
.catch((error) => console.log (`failure to connect DB : ${error}`));

// create schema
let courseSchema = mongoose.Schema({   
    tags: [String],
    date: { type: Date, default: Date.now() },
    name: { type: String },
    author: { type: String },
    isPublished: { type: Boolean },
    price: {type:Number}    
  });
  
let Course = mongoose.model("courses", courseSchema);

// get all data from database
/* async function getcourse(){
let coursedata = await Course.find();
console.log(coursedata);
}
getcourse(); */



// SECOND EXERCISE

/* get all the published frontend and backend courses
sort them by their price in a descending order, from most expensive
to least expensive, pick only their name and author,
and display them on the console. */
  
async function getcourse1(){
    let coursedata1 = await Course
    .find({isPublished:"true"})
    .sort("-price")
    .select("name author -_id");
    console.log("EXERCISE 2");
    console.log(coursedata1);
}
getcourse1();

