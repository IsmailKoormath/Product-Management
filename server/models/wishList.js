import mongoose, { Schema } from "mongoose";

const Schema = mongoose.Schema;

const wishlistSchema = new Schema(
  {
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);
const WishList = mongoose.model("WishList", wishlistSchema);
export default WishList;
