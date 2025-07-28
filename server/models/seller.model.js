import mongoose from 'mongoose';

const SellerSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      // because it's a one-to-one relationship
      unique: true,
    },
    storeName: {
      type: String,
      required: true,
      unique: true,
    },
    storeSlug: {
      type: String,
      required: true,
      unique: true,
    },
    // URL to their logo
    logo: String,
    description: String,
    isVerified: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
    earnings: {
      type: Number,
      default: 0,
    },
    sellerSince: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Seller', SellerSchema);
