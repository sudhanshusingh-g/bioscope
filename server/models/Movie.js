import mongoose from "mongoose";

const moviesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Movie title required"],
    trim: true,
  },
  genres: {
    type: [String],
    enum: [
      "Action",
      "Comedy",
      "Drama",
      "Fantasy",
      "Horror",
      "Romance",
      "Sci-Fi",
    ],
    default:[],
    required:false
  },
  languages:{
    type:[String],
    enum:["Hindi","English","Tamil","Telugu","Punjabi","Malyalam","Marathi"],
    default:[],
    required:true
  },
  duration:{
    type:Number,
    required:true
  },
  


},{
    timestamps:true
});

const Movie=mongoose.model("Movie",moviesSchema);
export default Movie;