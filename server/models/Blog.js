import { Schema, model } from "mongoose"



const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type:String,
        required: true,
    },
    name: {
        type: String,
        default: "others",

    },
    image: {
        type: String,
        required: true,
      
    },
    date: {
        type: Date,
        required: true,
      
    },
    Language: {
        type: String,
        required: true,
      
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required:true
    }
}, {
    timestamps: true,
});

const Blog = model("Blog", blogSchema);
export default Blog;
