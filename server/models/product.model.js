import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    title: String,
    slug: { type: String, unique: true },
    description: String,
    price: Number,
    stock: Number,
    images: [String],
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    rating: Number,
    numReviews: Number,
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Seller',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('product', productSchema);
