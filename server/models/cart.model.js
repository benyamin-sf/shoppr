import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        seller: { type: mongoose.Schema.Types.ObjectId, ref: 'Seller' },
        title: String,
        thumbnail: String,
        price: Number,
        quantity: {
          type: Number,
          required: [true, "'quantity' of the product must be specified."],
        },
        color: {
          type: String,
          required: [true, "'color' of the product must be specified."],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('cart', cartSchema);
