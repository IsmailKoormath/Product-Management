import mongoose, { Schema, model } from "mongoose";

const WishlistSchema = new Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  userId: {
    type: String,
    ref: "User",
  },
});

const wishlistModel = model("Wishlist", WishlistSchema);

export default wishlistModel;
