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

//FIRST EXERCISE
/* write a program and get all the published backend courses, in our database,
sort them by their name, and pick only their name and author properties. */

async function getcourse(){
    let coursedata = await Course
    .find({ isPublished:"true", tags:"backend" })
    .select("name author -_id")
    .sort("name");
    console.log("EXERCISE 1");
    console.log(coursedata);
    }
    getcourse();  
