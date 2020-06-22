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

// THIRD EXERCISE

/* get all the published courses that are 15 dollars or more
or have the word 'by' in their title. */

async function getcourse2(){
    let coursedata2 = await Course
    .find ({isPublished:"true"  })
    .or([{price:15}, {name: /.*"by"*./}])
    .select("name author -_id isPublished tags price");
    console.log("EXERCISE 3");
    console.log(coursedata2);
}
getcourse2(); 