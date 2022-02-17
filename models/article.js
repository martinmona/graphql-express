import mongoose from "mongoose";

const Schema = mongoose.Schema

const articleSchema = new Schema(
  {
    title: {
      type:String,
      required: true
    },

    body: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

export default mongoose.model("Article", articleSchema)
