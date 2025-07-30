import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        seller: { type: mongoose.Schema.Types.ObjectId, ref: 'Seller' },
        title: String,
        thumbnail: String,
        price: Number,
        quantity: Number,
        color: String,
      },
    ],
    shippingAddress: AddressSchema,
    paymentStatus: {
      type: String,
      enum: ['pending', 'paid', 'failed'],
      default: 'pending',
    },
    orderStatus: {
      type: String,
      enum: ['processing', 'shipped', 'delivered', 'cancelled'],
      default: 'processing',
    },
    totalAmount: Number,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('order', orderSchema);
